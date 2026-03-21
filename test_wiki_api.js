const https = require('https');

function fetchWikiImage(boneName) {
    const searchName = boneName.replace(/ /g, '_');
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchName)}`;
    
    https.get(url, { headers: { 'User-Agent': 'SkeletonAppBot/1.0' } }, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
             try {
                 const json = JSON.parse(data);
                 if (json.thumbnail) {
                     console.log(`${boneName}: ${json.thumbnail.source}`);
                 } else {
                     console.log(`${boneName}: NO IMAGE`);
                 }
             } catch(e) {
                 console.log(`${boneName}: ERROR PARSING ${e.message}`);
             }
        });
    });
}

fetchWikiImage("Femur");
fetchWikiImage("Mandible");
fetchWikiImage("Scaphoid bone");
fetchWikiImage("Middle phalanx");
fetchWikiImage("Frontal bone");
