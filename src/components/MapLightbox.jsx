import { useEffect } from "react";

export default function MapLightbox({
  dungeon,
  dungeons,
  onClose,
  onChangeDungeon,
}) {
  const currentIndex = dungeons.findIndex((item) => item.id === dungeon.id);

  const goToPrevious = () => {
    const nextIndex =
      currentIndex <= 0 ? dungeons.length - 1 : currentIndex - 1;
    onChangeDungeon(dungeons[nextIndex]);
  };

  const goToNext = () => {
    const nextIndex =
      currentIndex >= dungeons.length - 1 ? 0 : currentIndex + 1;
    onChangeDungeon(dungeons[nextIndex]);
  };

  useEffect(() => {
    document.body.classList.add("has-lightbox");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("has-lightbox");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dungeon.id]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${dungeon.name} map`}
    >
      <button
        type="button"
        className="lightbox__backdrop"
        aria-label="Close map"
        onClick={onClose}
      />

      <div className="lightbox__panel">
        <header className="lightbox__header">
          <div>
            <h2>{dungeon.name}</h2>
            <p>
              {dungeon.shortName} · {dungeon.levelRange} · {dungeon.zone}
            </p>
          </div>

          <button type="button" className="lightbox__close" onClick={onClose}>
            ×
          </button>
        </header>

        <div className="lightbox__image-wrap">
          <img src={dungeon.mapSrc} alt={`${dungeon.name} map`} />
        </div>

        <footer className="lightbox__footer">
          <button type="button" onClick={goToPrevious}>
            Previous
          </button>

          <p>{dungeon.notes}</p>

          <button type="button" onClick={goToNext}>
            Next
          </button>
        </footer>
      </div>
    </div>
  );
}
