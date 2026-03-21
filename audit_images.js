const fs = require('fs');

let dataRaw = fs.readFileSync('data.js', 'utf8');
const bonesMatch = dataRaw.match(/const bonesData = (\[[\s\S]*?\]);/);
let bonesData = eval(bonesMatch[1]);

bonesData.forEach(b => {
    console.log(`${b.name} -> ${b.imageUrl || 'NONE'}`);
});
