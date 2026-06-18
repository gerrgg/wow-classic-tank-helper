export default function DungeonList({ dungeons, onSelectDungeon }) {
  return (
    <nav className="dungeon-list" aria-label="Dungeon list">
      {dungeons.map((dungeon) => (
        <button
          key={dungeon.id}
          type="button"
          className="dungeon-list__item"
          onClick={() => onSelectDungeon(dungeon)}
        >
          <span>{dungeon.name}</span>
          <small>{dungeon.levelRange}</small>
        </button>
      ))}
    </nav>
  );
}
