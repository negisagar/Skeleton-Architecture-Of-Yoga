const bonesData = [
    {
        "name": "Frontal bone",
        "category": "Skull",
        "region": "Axial",
        "count": 1,
        "text": "Forehead bone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Frontal_bone_lateral3.png/330px-Frontal_bone_lateral3.png"
    },
    {
        "name": "Parietal bone",
        "category": "Skull",
        "region": "Axial",
        "count": 2,
        "text": "Top and sides of the cranium",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Parietal_bone_posterior2.png/330px-Parietal_bone_posterior2.png"
    },
    {
        "name": "Temporal bone",
        "category": "Skull",
        "region": "Axial",
        "count": 2,
        "text": "Sides and base of the cranium",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Temporal_bone_lateral5.png/330px-Temporal_bone_lateral5.png"
    },
    {
        "name": "Occipital bone",
        "category": "Skull",
        "region": "Axial",
        "count": 1,
        "text": "Back and base of the cranium",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Occipital_bone_lateral2.png/330px-Occipital_bone_lateral2.png"
    },
    {
        "name": "Sphenoid bone",
        "category": "Skull",
        "region": "Axial",
        "count": 1,
        "text": "Butterfly-shaped bone at the base of the skull",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sphenoid_bone_-_lateral_view.png/330px-Sphenoid_bone_-_lateral_view.png"
    },
    {
        "name": "Ethmoid bone",
        "category": "Skull",
        "region": "Axial",
        "count": 1,
        "text": "Between eyes, forms part of nasal cavity",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Orbital_bones.png/330px-Orbital_bones.png"
    },
    {
        "name": "Mandible",
        "category": "Face",
        "region": "Axial",
        "count": 1,
        "text": "Lower jaw bone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mandible_bone_-_animation_02.gif/330px-Mandible_bone_-_animation_02.gif"
    },
    {
        "name": "Maxilla",
        "category": "Face",
        "region": "Axial",
        "count": 2,
        "text": "Upper jaw bone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Maxilla_anterior.png/330px-Maxilla_anterior.png"
    },
    {
        "name": "Palatine bone",
        "category": "Face",
        "region": "Axial",
        "count": 2,
        "text": "Posterior part of the hard palate",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Palatine_bone_-_animation_02.gif/330px-Palatine_bone_-_animation_02.gif"
    },
    {
        "name": "Zygomatic bone",
        "category": "Face",
        "region": "Axial",
        "count": 2,
        "text": "Cheekbones",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zygomatic_bone_anterior.png/330px-Zygomatic_bone_anterior.png"
    },
    {
        "name": "Nasal bone",
        "category": "Face",
        "region": "Axial",
        "count": 2,
        "text": "Bridge of the nose",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Illu_facial_bones.jpg/330px-Illu_facial_bones.jpg"
    },
    {
        "name": "Lacrimal bone",
        "category": "Face",
        "region": "Axial",
        "count": 2,
        "text": "Inner eye sockets",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lacrimal_bone_-_lateral_view6.png/330px-Lacrimal_bone_-_lateral_view6.png"
    },
    {
        "name": "Vomer",
        "category": "Face",
        "region": "Axial",
        "count": 1,
        "text": "Inferior part of the nasal septum",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Illu_facial_bones.jpg/330px-Illu_facial_bones.jpg"
    },
    {
        "name": "Inferior nasal concha",
        "category": "Face",
        "region": "Axial",
        "count": 2,
        "text": "Scroll-like bones in nasal cavity",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gray192.png/330px-Gray192.png"
    },
    {
        "name": "Malleus",
        "category": "Ear",
        "region": "Axial",
        "count": 2,
        "text": "Hammer",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gray916.png/330px-Gray916.png"
    },
    {
        "name": "Incus",
        "category": "Ear",
        "region": "Axial",
        "count": 2,
        "text": "Anvil",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Gray917.png/330px-Gray917.png"
    },
    {
        "name": "Stapes",
        "category": "Ear",
        "region": "Axial",
        "count": 2,
        "text": "Stirrup",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Stapes_bone_svg_hariadhi.svg/330px-Stapes_bone_svg_hariadhi.svg.png"
    },
    {
        "name": "Hyoid bone",
        "category": "Neck",
        "region": "Axial",
        "count": 1,
        "text": "U-shaped bone in the neck",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/712_Hyoid_Bone.jpg/330px-712_Hyoid_Bone.jpg"
    },
    {
        "name": "Cervical vertebra",
        "category": "Spine",
        "region": "Axial",
        "count": 7,
        "text": "Neck vertebrae (C1-C7)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cervical_vertebrae_lateral2.png/330px-Cervical_vertebrae_lateral2.png"
    },
    {
        "name": "Thoracic vertebra",
        "category": "Spine",
        "region": "Axial",
        "count": 12,
        "text": "Chest vertebrae (T1-T12)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Thoracic_vertebrae_back5.png/330px-Thoracic_vertebrae_back5.png"
    },
    {
        "name": "Lumbar vertebra",
        "category": "Spine",
        "region": "Axial",
        "count": 5,
        "text": "Lower back vertebrae (L1-L5)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lumbar_vertebrae_anterior.png/330px-Lumbar_vertebrae_anterior.png"
    },
    {
        "name": "Sacrum",
        "category": "Spine",
        "region": "Axial",
        "count": 1,
        "text": "5 fused vertebrae",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sacrum_-_anterior_view04.png/330px-Sacrum_-_anterior_view04.png"
    },
    {
        "name": "Coccyx",
        "category": "Spine",
        "region": "Axial",
        "count": 1,
        "text": "4 fused vertebrae (Tailbone)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Coccyx_-_anterior_view02.png/330px-Coccyx_-_anterior_view02.png"
    },
    {
        "name": "Sternum",
        "category": "Chest",
        "region": "Axial",
        "count": 1,
        "text": "Breastbone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sternum_composition.png/330px-Sternum_composition.png"
    },
    {
        "name": "True rib",
        "category": "Chest",
        "region": "Axial",
        "count": 14,
        "text": "Pairs 1-7",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rib_cage.gif/330px-Rib_cage.gif"
    },
    {
        "name": "False rib",
        "category": "Chest",
        "region": "Axial",
        "count": 6,
        "text": "Pairs 8-10",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rib_cage.gif/330px-Rib_cage.gif"
    },
    {
        "name": "Floating rib",
        "category": "Chest",
        "region": "Axial",
        "count": 4,
        "text": "Pairs 11-12",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rib_cage.gif/330px-Rib_cage.gif"
    },
    {
        "name": "Clavicle",
        "category": "Shoulder",
        "region": "Appendicular",
        "count": 2,
        "text": "Collarbone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Clavicle_-_anterior_view.png/330px-Clavicle_-_anterior_view.png"
    },
    {
        "name": "Scapula",
        "category": "Shoulder",
        "region": "Appendicular",
        "count": 2,
        "text": "Shoulder blade",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pectoral_girdle_front_diagram.svg/330px-Pectoral_girdle_front_diagram.svg.png"
    },
    {
        "name": "Humerus",
        "category": "Arm",
        "region": "Appendicular",
        "count": 2,
        "text": "Upper arm bone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Humerus_-_anterior_view.png/330px-Humerus_-_anterior_view.png"
    },
    {
        "name": "Radius",
        "category": "Arm",
        "region": "Appendicular",
        "count": 2,
        "text": "Lateral forearm bone (thumb side)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Circle-withsegments.svg/330px-Circle-withsegments.svg.png"
    },
    {
        "name": "Ulna",
        "category": "Arm",
        "region": "Appendicular",
        "count": 2,
        "text": "Medial forearm bone (pinky side)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ulna_-_anterior_view.png/330px-Ulna_-_anterior_view.png"
    },
    {
        "name": "Scaphoid",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Scaphoid_bone_%28left_hand%29_01_palmar_view.png/330px-Scaphoid_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Lunate",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lunate_bone_%28left_hand%29_01_palmar_view.png/330px-Lunate_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Triquetrum",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Triangular_bone_%28left_hand%29_01_palmar_view.png/330px-Triangular_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Pisiform",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pisiform_bone_%28left_hand%29_01_palmar_view.png/330px-Pisiform_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Trapezium",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Trapezium_bone_%28left%2901_palmar_view.png/330px-Trapezium_bone_%28left%2901_palmar_view.png"
    },
    {
        "name": "Trapezoid",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Trapezoid_bone_%28left_hand%29_01_palmar_view.png/330px-Trapezoid_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Capitate",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Capitate_bone_%28left_hand%29_01_palmar_view.png/330px-Capitate_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Hamate",
        "category": "Hand",
        "region": "Appendicular",
        "count": 2,
        "text": "Carpal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Hamate_bone_%28left_hand%29_01_palmar_view.png/330px-Hamate_bone_%28left_hand%29_01_palmar_view.png"
    },
    {
        "name": "Metacarpal bone",
        "category": "Hand",
        "region": "Appendicular",
        "count": 10,
        "text": "Palm bones (5 per hand)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Metacarpal_bones_%28left_hand%29_01_palmar_view_with_label.png/330px-Metacarpal_bones_%28left_hand%29_01_palmar_view_with_label.png"
    },
    {
        "name": "Proximal phalanx (hand)",
        "category": "Hand",
        "region": "Appendicular",
        "count": 10,
        "text": "First segment of fingers",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Scheme_human_hand_bones-en.svg/330px-Scheme_human_hand_bones-en.svg.png"
    },
    {
        "name": "Middle phalanx (hand)",
        "category": "Hand",
        "region": "Appendicular",
        "count": 8,
        "text": "Second segment of fingers (excluding thumb)",
        "imageUrl": null
    },
    {
        "name": "Distal phalanx (hand)",
        "category": "Hand",
        "region": "Appendicular",
        "count": 10,
        "text": "Tip segment of fingers",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Scheme_human_hand_bones-en.svg/330px-Scheme_human_hand_bones-en.svg.png"
    },
    {
        "name": "Os coxae",
        "category": "Pelvis",
        "region": "Appendicular",
        "count": 2,
        "text": "Hip bone (Ilium, Ischium, Pubis fused)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Hip_bone_anterior_high-res.jpg/330px-Hip_bone_anterior_high-res.jpg"
    },
    {
        "name": "Femur",
        "category": "Leg",
        "region": "Appendicular",
        "count": 2,
        "text": "Thigh bone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Femur_-_anterior_view2.png/330px-Femur_-_anterior_view2.png"
    },
    {
        "name": "Patella",
        "category": "Leg",
        "region": "Appendicular",
        "count": 2,
        "text": "Kneecap",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Knee_diagram.svg/330px-Knee_diagram.svg.png"
    },
    {
        "name": "Tibia",
        "category": "Leg",
        "region": "Appendicular",
        "count": 2,
        "text": "Shin bone (medial)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tibia_-_frontal_view.png/330px-Tibia_-_frontal_view.png"
    },
    {
        "name": "Fibula",
        "category": "Leg",
        "region": "Appendicular",
        "count": 2,
        "text": "Calf bone (lateral)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fibula_-_anterior_view.png/330px-Fibula_-_anterior_view.png"
    },
    {
        "name": "Talus",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Tarsal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Subtalar_Joint.PNG/330px-Subtalar_Joint.PNG"
    },
    {
        "name": "Calcaneus",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Heel bone",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Subtalar_Joint.PNG/330px-Subtalar_Joint.PNG"
    },
    {
        "name": "Navicular",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Tarsal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Foot_bones_-_tarsus%2C_metatarsus_and_phalanges.jpg/330px-Foot_bones_-_tarsus%2C_metatarsus_and_phalanges.jpg"
    },
    {
        "name": "Medial cuneiform",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Tarsal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cuneiform_bone_animation01.gif/330px-Cuneiform_bone_animation01.gif"
    },
    {
        "name": "Intermediate cuneiform",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Tarsal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cuneiform_bone_animation01.gif/330px-Cuneiform_bone_animation01.gif"
    },
    {
        "name": "Lateral cuneiform",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Tarsal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cuneiform_bone_animation01.gif/330px-Cuneiform_bone_animation01.gif"
    },
    {
        "name": "Cuboid",
        "category": "Foot",
        "region": "Appendicular",
        "count": 2,
        "text": "Tarsal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gray274.png/330px-Gray274.png"
    },
    {
        "name": "Metatarsal bone",
        "category": "Foot",
        "region": "Appendicular",
        "count": 10,
        "text": "Mid-foot bones",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Metatarsal_bones01_-_superior_view.png/330px-Metatarsal_bones01_-_superior_view.png"
    },
    {
        "name": "Proximal phalanx (foot)",
        "category": "Foot",
        "region": "Appendicular",
        "count": 10,
        "text": "First segment of toes",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Scheme_human_hand_bones-en.svg/330px-Scheme_human_hand_bones-en.svg.png"
    },
    {
        "name": "Middle phalanx (foot)",
        "category": "Foot",
        "region": "Appendicular",
        "count": 8,
        "text": "Second segment of toes (excluding big toe)",
        "imageUrl": null
    },
    {
        "name": "Distal phalanx (foot)",
        "category": "Foot",
        "region": "Appendicular",
        "count": 10,
        "text": "Tip segment of toes",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Scheme_human_hand_bones-en.svg/330px-Scheme_human_hand_bones-en.svg.png"
    }
];

// Affixes for the Matrix / Cheat Sheet
const affixes = [
    { type: "prefix", word: "Proximal", meaning: "Closer to the point of attachment or origin." },
    { type: "prefix", word: "Distal", meaning: "Further from the point of attachment or origin." },
    { type: "prefix", word: "Medial", meaning: "Towards the midline of the body." },
    { type: "prefix", word: "Lateral", meaning: "Away from the midline of the body." },
    { type: "prefix", word: "Anterior", meaning: "Towards the front of the body." },
    { type: "prefix", word: "Posterior", meaning: "Towards the back of the body." },
    { type: "prefix", word: "Superior", meaning: "Above or higher up." },
    { type: "prefix", word: "Inferior", meaning: "Below or lower down." },
    { type: "suffix", word: "Phalanx", meaning: "A bone of the finger or toe." },
    { type: "suffix", word: "Cuneiform", meaning: "Wedge-shaped bones of the foot." },
    { type: "suffix", word: "Vertebra", meaning: "Individual bones of the spine." },
    { type: "suffix", word: "Concha", meaning: "Scroll-like shell." },

];

export { bonesData, affixes };
