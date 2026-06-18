import { useMemo, useState } from "react";
import { dungeons } from "./data/dungeons";
import Sidebar from "./components/Sidebar";
import InteractiveMap from "./components/InteractiveMap";
import "./styles.css";

export default function App() {
  const [selectedDungeonId, setSelectedDungeonId] = useState(dungeons[0].id);
  const [query, setQuery] = useState("");

  const filteredDungeons = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return dungeons;

    return dungeons.filter((dungeon) => {
      return [dungeon.name, dungeon.shortName, dungeon.levelRange, dungeon.zone]
        .join(" ")
        .toLowerCase()
        .includes(value);
    });
  }, [query]);

  const selectedDungeon =
    dungeons.find((dungeon) => dungeon.id === selectedDungeonId) || dungeons[0];

  return (
    <div className="app-shell">
      <Sidebar
        dungeons={filteredDungeons}
        selectedDungeonId={selectedDungeon.id}
        query={query}
        onQueryChange={setQuery}
        onSelectDungeon={setSelectedDungeonId}
      />

      <InteractiveMap dungeon={selectedDungeon} />
    </div>
  );
}
