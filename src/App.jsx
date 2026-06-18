// src/App.jsx

import { useState } from "react";
import { dungeons } from "./data/dungeons";
import Sidebar from "./components/Sidebar";
import InteractiveMap from "./components/InteractiveMap";

export default function App() {
  const [selectedDungeonId, setSelectedDungeonId] = useState(dungeons[0].id);

  const selectedDungeon =
    dungeons.find((dungeon) => dungeon.id === selectedDungeonId) || dungeons[0];

  return (
    <div className="app-shell">
      <Sidebar
        dungeons={dungeons}
        selectedDungeonId={selectedDungeon.id}
        onSelectDungeon={setSelectedDungeonId}
      />

      <InteractiveMap dungeon={selectedDungeon} />
    </div>
  );
}
