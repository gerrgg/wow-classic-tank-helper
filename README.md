# WoW Classic Tank Helper

A simple React/Vite app for viewing WoW Classic dungeon maps, boss locations, and notable loot.

## Features

- Interactive dungeon maps
- Clickable boss markers
- Boss notes and loot tables
- Wowhead item links/tooltips
- Dungeon data stored in reusable JavaScript files
- Built with React, Vite, and Leaflet

## Tech Stack

- React
- Vite
- React Leaflet
- Leaflet
- Wowhead tooltips

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```txt
src/
  components/
    InteractiveMap.jsx
    Sidebar.jsx
    LootPopup.jsx

  data/
    dungeons/
      deadmines.js
      shadowfang-keep.js
      index.js

  App.jsx
  main.jsx
  styles.css

public/
  maps/
```

## Dungeon Data

Each dungeon has its own data file inside:

```txt
src/data/dungeons/
```

Example:

```js
const deadmines = {
  id: "deadmines",
  zoneId: 1581,
  name: "The Deadmines",
  shortName: "DM",
  levelRange: "17–26",
  zone: "Westfall",
  mapSrc: "/wow-classic-tank-helper/maps/deadmines.jpg",
  width: 1024,
  height: 772,
  markers: [],
};

export default deadmines;
```

Boss marker coordinates are currently set manually.

## GitHub Pages Deployment

This project is configured for GitHub Pages at:

```txt
https://gerrgg.github.io/wow-classic-tank-helper/
```

For Vite, make sure `vite.config.js` includes:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/wow-classic-tank-helper/",
});
```

Then deploy the built `dist` folder using GitHub Actions or a `gh-pages` deployment workflow.

## Notes

This is a personal WoW Classic helper project and is not affiliated with Blizzard Entertainment or Wowhead.
