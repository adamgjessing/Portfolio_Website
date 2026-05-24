# Portfolio Project

## Quick Start
1. Install Node.js from https://nodejs.org (LTS version)
2. Open a terminal in this folder
3. Run: `npm install`
4. Run: `npm run dev`
5. Open the URL it shows (usually http://localhost:5173)

## Folder Structure

```
portfolio-project/
│
├── index.html              ← The single HTML page. Vite injects your app into it.
├── package.json            ← Lists dependencies (React, Vite). Like a recipe's ingredient list.
├── vite.config.js          ← Vite build tool config. You rarely touch this.
│
└── src/                    ← ALL your code lives here
    │
    ├── main.jsx            ← Entry point. Mounts your app into index.html. Don't edit.
    ├── App.jsx             ← The "assembler". Decides which page to show.
    │
    ├── data/               ← YOUR CONTENT. Edit these to update the site.
    │   ├── siteConfig.js       ← Your name, bio, contact links, section list
    │   ├── analytics.js        ← Analytics project entries
    │   ├── photography.js      ← Photography project entries
    │   └── sectionRegistry.js  ← Wires section keys to their data + display config
    │
    ├── theme/              ← VISUAL SETTINGS. Colors, fonts, spacing.
    │   └── theme.js            ← One file controls the entire site's look
    │
    ├── hooks/              ← REUSABLE BEHAVIORS. Logic without visuals.
    │   ├── useFadeIn.js        ← Makes things fade in on load
    │   └── useRouter.js        ← Manages page navigation
    │
    ├── components/         ← REUSABLE UI PIECES. Small, generic building blocks.
    │   ├── Tag.jsx             ← Small label pill ("Python", "35mm")
    │   ├── BackButton.jsx      ← "← Back" navigation link
    │   ├── SectionHeader.jsx   ← Section title bar with accent + count
    │   ├── ProjectCard.jsx     ← Clickable project card
    │   ├── MetaSidebar.jsx     ← Sticky sidebar for metadata
    │   ├── ViewAllButton.jsx   ← "View All →" button
    │   ├── ProjectNavLink.jsx  ← Previous/Next project links
    │   └── Nav.jsx             ← Top navigation bar
    │
    └── pages/              ← FULL PAGES. Each assembles components into a view.
        ├── HomePage.jsx        ← Landing page (the hub)
        ├── SectionPage.jsx     ← All projects in one category
        ├── ProjectPage.jsx     ← Single project case study
        ├── AboutPage.jsx       ← Bio + contact
        └── FooterSection.jsx   ← Bottom bar
```
