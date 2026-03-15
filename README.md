# Architecture of Yoga: The Human Skeleton

A beautiful, interactive reference guide and "cheat sheet" for the 206 bones of the human body, designed for the Manali Yogashala "Architecture of Yoga" course.

This project was built to simplify the process of memorizing the human skeleton by breaking down complex anatomical terms into simple prefixes, suffixes, and regions. Visualizations are provided by combining interactive 3D WebGL models with precise, classic 2D anatomical illustrations dynamically fetched from the Wikipedia API.

## Features
- **The Naming Matrix:** A quick-reference table decoding common anatomical affixes (e.g., *Proximal*, *Distal*, *Phalanx*).
- **Regional Breakdown:** Dynamic filtering to quickly isolate bones by region (Axial vs. Appendicular) or category (Skull, Face, Spine, Arm, Leg, etc.).
- **Interactive Focus Modal:** Click on any of the 206 bone cards to enter a focused "Zoom" mode featuring high-res diagrams, tag breakdowns, and direct links to the full Wikipedia article.
- **3D Fallbacks:** Utilizes Google's `<model-viewer>` component to render interactive 3D WebGL skulls that users can rotate and zoom for bones lacking specific 2D diagrams.
- **Responsive Design:** A polished, glassmorphism-inspired UI that seamlessly adapts from desktop grid layouts to mobile vertical stacks.

## Technology Stack
- **HTML5 & Vanilla CSS:** Styled directly with modern CSS variables, Grid layouts, and custom media queries.
- **Vanilla JavaScript (ES Modules):** Clean, dependency-free JS logic that handles the dynamic rendering of 206 reference cards on the fly.
- **Wikimedia REST API:** Fetches accurate, traditional anatomical graphics dynamically.
- **Google `<model-viewer>`:** Powers the interactive 3D viewing capabilities.

## How to Run Locally

Because this project uses JavaScript ES Modules (`<script type="module">`), modern browsers will block it from running directly via the `file://` protocol due to CORS security policies. 

You must run a local development server to view it:

```bash
# 1. Clone the repository
git clone https://github.com/negisagar/Skeleton-Architecture-Of-Yoga.git

# 2. Navigate to the directory
cd Skeleton-Architecture-Of-Yoga

# 3. Start a local server (Python 3 is easiest)
python3 -m http.server 8000

# 4. Open your browser
# Go to http://localhost:8000
```
