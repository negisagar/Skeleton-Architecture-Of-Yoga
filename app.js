import { bonesData, affixes } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderStats();
    renderMatrix();
    renderBonesList();
    renderCategories();
    setupModal();
}

// Render the summary stats (total bones, axial, appendicular)
function renderStats() {
    let totalBones = 0;
    let axialCount = 0;
    let appendicularCount = 0;

    bonesData.forEach(bone => {
        totalBones += bone.count;
        if (bone.region === "Axial") axialCount += bone.count;
        if (bone.region === "Appendicular") appendicularCount += bone.count;
    });

    document.getElementById("total-bones").innerText = totalBones;
    document.getElementById("axial-bones").innerText = axialCount;
    document.getElementById("appendicular-bones").innerText = appendicularCount;
}

// Render the matrix to understand common roots
function renderMatrix() {
    const tableBody = document.getElementById("matrix-body");
    tableBody.innerHTML = "";

    affixes.forEach(affix => {
        // Find how many times this affix is used in the bone names
        let matches = bonesData.filter(b => b.name.toLowerCase().includes(affix.word.toLowerCase()));
        let totalCount = 0;
        matches.forEach(m => totalCount += m.count);

        // create row
        const tr = document.createElement("tr");

        const tdType = document.createElement("td");
        tdType.innerHTML = `<span class="badge ${affix.type}">${affix.type.toUpperCase()}</span>`;
        
        const tdWord = document.createElement("td");
        tdWord.className = "term-word";
        tdWord.innerText = affix.word;

        const tdMeaning = document.createElement("td");
        tdMeaning.innerText = affix.meaning;

        const tdOccurrences = document.createElement("td");
        tdOccurrences.className = "count-cell";
        tdOccurrences.innerText = totalCount;

        const tdExamples = document.createElement("td");
        tdExamples.innerText = matches.map(m => m.name).join(", ") || "-";

        tr.appendChild(tdType);
        tr.appendChild(tdWord);
        tr.appendChild(tdMeaning);
        tr.appendChild(tdOccurrences);
        tr.appendChild(tdExamples);
        
        tableBody.appendChild(tr);
    });
}

// Render the 206 bones list
function renderBonesList(filterCategory = null) {
    const listContainer = document.getElementById("bones-grid");
    listContainer.innerHTML = "";

    const filteredBones = filterCategory 
        ? bonesData.filter(b => b.category === filterCategory)
        : bonesData;

    filteredBones.forEach(bone => {
        const card = document.createElement("div");
        card.className = "bone-card";
        
        
        const visualContent = bone.imageUrl 
            ? `<img src="${bone.imageUrl}" alt="${bone.name}" class="bone-image" />`
            : `<div class="no-image-placeholder">No Image Available</div>`;

        card.innerHTML = `
            <div class="bone-visual-placeholder">
                ${visualContent}
            </div>
            <div class="bone-header">
                <h3>${bone.name}</h3>
                <span class="bone-count">x${bone.count}</span>
            </div>
            <p class="bone-desc">${bone.text}</p>
            <div class="bone-tags">
                <span class="tag region-${bone.region.toLowerCase()}">${bone.region}</span>
                <span class="tag category-tag">${bone.category}</span>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function renderCategories() {
    // Generate a beautiful category breakdown pie or list (for now just a visually styled list)
    const categoryMap = {};
    let totalCount = 0;
    
    bonesData.forEach(bone => {
        if (!categoryMap[bone.category]) categoryMap[bone.category] = 0;
        categoryMap[bone.category] += bone.count;
        totalCount += bone.count;
    });

    const breakdownContainer = document.getElementById("category-breakdown");
    breakdownContainer.innerHTML = "";
    
    // Add "All" option
    const allItem = document.createElement("div");
    allItem.className = "breakdown-item active-filter";
    allItem.innerHTML = `
        <span class="breakdown-name" style="font-weight: 800;">All Bones</span>
        <span class="breakdown-count">${totalCount}</span>
    `;
    allItem.addEventListener('click', () => {
        document.querySelectorAll('.breakdown-item').forEach(el => el.classList.remove('active-filter'));
        allItem.classList.add('active-filter');
        renderBonesList(null);
    });
    breakdownContainer.appendChild(allItem);
    
    // Add individual categories
    for (const [cat, count] of Object.entries(categoryMap)) {
        const item = document.createElement("div");
        item.className = "breakdown-item";
        item.innerHTML = `
            <span class="breakdown-name">${cat}</span>
            <span class="breakdown-count">${count}</span>
        `;
        
        item.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.breakdown-item').forEach(el => el.classList.remove('active-filter'));
            item.classList.add('active-filter');
            
            // Filter grid
            renderBonesList(cat);
        });
        
        breakdownContainer.appendChild(item);
    }
}

// Setup Modal Interactivity
function setupModal() {
    const modal = document.getElementById('bone-modal');
    const closeBtn = document.getElementById('close-modal');
    
    // Close modal handlers
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            document.getElementById('modal-visual').innerHTML = ''; // Clear memory
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); // Click on overlay background
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // Delegate click events from the grid container
    const grid = document.getElementById('bones-grid');
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.bone-card');
        if (!card) return;

        const boneName = card.querySelector('h3').innerText;
        const bone = bonesData.find(b => b.name === boneName);
        if (!bone) return;

        // Populate Modal Content
        document.getElementById('modal-title').innerText = bone.name;
        document.getElementById('modal-desc').innerText = bone.text;
        document.getElementById('modal-tags').innerHTML = `
            <span class="tag region-${bone.region.toLowerCase()}">${bone.region}</span>
            <span class="tag category-tag">${bone.category}</span>
            <span class="tag" style="background:#333;color:white;">Total: ${bone.count}</span>
        `;
        
        const wikiOverrides = {
            "Radius": "Radius_(bone)",
            "Cuboid": "Cuboid_bone",
            "Proximal phalanx (hand)": "Proximal_phalanges_of_the_hand",
            "Middle phalanx (hand)": "Intermediate_phalanges_of_the_hand",
            "Distal phalanx (hand)": "Distal_phalanges_of_the_hand",
            "Proximal phalanx (foot)": "Proximal_phalanges_of_the_foot",
            "Middle phalanx (foot)": "Intermediate_phalanges_of_the_foot",
            "Distal phalanx (foot)": "Distal_phalanges_of_the_foot"
        };
        
        let wikiSearchWord = wikiOverrides[bone.name] || bone.name.replace(' (hand)', '').replace(' (foot)', '');
        const encodedWord = encodeURIComponent(wikiSearchWord);
        
        let actionsHTML = '';
        if (bone.imageUrl) {
            actionsHTML += `<a href="https://en.wikipedia.org/wiki/${encodedWord}" target="_blank" class="action-btn wiki">Read on Wikipedia &rarr;</a>`;
        } else {
            actionsHTML += `<a href="https://www.google.com/search?tbm=isch&q=${encodedWord}+bone+anatomy" target="_blank" class="action-btn google">Search on Google</a>`;
            actionsHTML += `<a href="https://chatgpt.com/?q=Tell+me+about+the+${encodedWord}+bone+in+human+anatomy" target="_blank" class="action-btn chatgpt">Ask ChatGPT</a>`;
        }
        document.getElementById('modal-actions').innerHTML = actionsHTML;

        const visualContainer = document.getElementById('modal-visual');
        if (bone.imageUrl) {
            visualContainer.innerHTML = `<img src="${bone.imageUrl}" alt="${bone.name}" />`;
        } else {
            visualContainer.innerHTML = `<div class="no-image-placeholder" style="height: 100%; font-size: 1.5rem; text-align: center; padding: 2rem;">Cannot link accurate Wikipedia image for<br><br><span style="color:var(--primary)">${bone.name}</span></div>`;
        }

        // Show Modal
        modal.classList.add('active');
    });
}
