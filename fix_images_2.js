const fs = require('fs');
const https = require('https');

let dataRaw = fs.readFileSync('data.js', 'utf8');
const bonesMatch = dataRaw.match(/const bonesData = (\[[\s\S]*?\]);/);
const affixesMatch = dataRaw.match(/const affixes = (\[[\s\S]*?\]);/);

let bonesData = eval(bonesMatch[1]);

// Manual overrides for ambiguous names
const manualOverrides = {
    "Radius": "Radius_(bone)",
    "Proximal phalanx (hand)": "Proximal_phalanges_of_the_hand",
    "Middle phalanx (hand)": "Intermediate_phalanges_of_the_hand",
    "Distal phalanx (hand)": "Distal_phalanges_of_the_hand",
    "Proximal phalanx (foot)": "Proximal_phalanges_of_the_foot",
    "Middle phalanx (foot)": "Intermediate_phalanges_of_the_foot",
    "Distal phalanx (foot)": "Distal_phalanges_of_the_foot"
};

let bonesToFix = Object.keys(manualOverrides);
let currentIndex = 0;

function fetchImage() {
    if (currentIndex >= bonesToFix.length) {
        saveFile();
        return;
    }
    
    let originalName = bonesToFix[currentIndex];
    let searchName = manualOverrides[originalName];
    
    let boneIndex = bonesData.findIndex(b => b.name === originalName);
    if (boneIndex === -1) {
        console.log(`Could not find ${originalName} in database.`);
        currentIndex++;
        fetchImage();
        return;
    }
    
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchName)}`;
    
    https.get(url, { headers: { 'User-Agent': 'SkeletonAppBot/1.2' } }, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
             try {
                 const json = JSON.parse(data);
                 if (json.thumbnail && json.thumbnail.source) {
                     bonesData[boneIndex].imageUrl = json.thumbnail.source;
                     console.log(`[FIXED] ${originalName} -> ${json.thumbnail.source}`);
                 } else {
                     bonesData[boneIndex].imageUrl = null; // force null if missing
                     console.log(`[NO IMAGE] ${originalName} using ${searchName}`);
                 }
             } catch(e) {
                 console.log(`[ERR] ${originalName}`);
             }
             currentIndex++;
             setTimeout(fetchImage, 100); 
        });
    }).on('error', () => {
        console.log(`[NETWORK ERR] ${originalName}`);
        currentIndex++;
        fetchImage();
    });
}

function saveFile() {
    let newContent = `const bonesData = ${JSON.stringify(bonesData, null, 4)};\n\n`;
    newContent += `// Affixes for the Matrix / Cheat Sheet\nconst affixes = ${affixesMatch[1]};\n\n`;
    newContent += `export { bonesData, affixes };\n`;
    
    fs.writeFileSync('data.js', newContent, 'utf8');
    console.log("Successfully updated data.js with corrected Wikipedia image URLs!");
}

fetchImage();
