// src/components/Sidebar.jsx

export default function Sidebar({
  dungeons,
  selectedDungeonId,
  onSelectDungeon,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <h1>Dungeon Navigator</h1>
        <p>WoW Classic maps</p>
      </div>

      <nav className="dungeon-nav">
        {dungeons.map((dungeon) => (
          <button
            key={dungeon.id}
            type="button"
            className={
              dungeon.id === selectedDungeonId
                ? "dungeon-nav__item is-active"
                : "dungeon-nav__item"
            }
            onClick={() => onSelectDungeon(dungeon.id)}
          >
            <span>{dungeon.name}</span>
            <small>
              {dungeon.shortName} · {dungeon.levelRange}
            </small>
          </button>
        ))}
      </nav>
    </aside>
  );
}
