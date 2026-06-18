export default function DungeonCard({ dungeon, onOpenMap }) {
  return (
    <article className="dungeon-card">
      <button
        type="button"
        className="dungeon-card__image"
        onClick={() => onOpenMap(dungeon)}
      >
        <img src={dungeon.mapSrc} alt={`${dungeon.name} map`} />
        <span>Open Map</span>
      </button>

      <div className="dungeon-card__body">
        <div className="dungeon-card__title-row">
          <h3>{dungeon.name}</h3>
          <span>{dungeon.shortName}</span>
        </div>

        <dl className="dungeon-meta">
          <div>
            <dt>Level</dt>
            <dd>{dungeon.levelRange}</dd>
          </div>
          <div>
            <dt>Zone</dt>
            <dd>{dungeon.zone}</dd>
          </div>
          <div>
            <dt>Faction</dt>
            <dd>{dungeon.faction}</dd>
          </div>
        </dl>

        {dungeon.notes && <p>{dungeon.notes}</p>}
      </div>
    </article>
  );
}
