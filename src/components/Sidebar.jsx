export default function Sidebar({
  dungeons,
  selectedDungeonId,
  query,
  onQueryChange,
  onSelectDungeon,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <h1>Dungeon Navigator</h1>
        <p>WoW Classic maps</p>
      </div>

      <label className="sidebar-search">
        <span>Search</span>
        <input
          type="search"
          value={query}
          placeholder="Search BRD, SM, Tanaris..."
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>

      <nav className="dungeon-nav" aria-label="Dungeon maps">
        {dungeons.map((dungeon) => {
          const isActive = dungeon.id === selectedDungeonId;

          return (
            <button
              key={dungeon.id}
              type="button"
              className={`dungeon-nav__item ${isActive ? "is-active" : ""}`}
              onClick={() => onSelectDungeon(dungeon.id)}
            >
              <span className="dungeon-nav__name">{dungeon.name}</span>
              <span className="dungeon-nav__meta">
                {dungeon.shortName} · {dungeon.levelRange}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
