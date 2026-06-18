import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function InteractiveMap({ dungeon }) {
  return (
    <main className="map-view">
      <header className="map-header">
        <div>
          <h2>{dungeon.name}</h2>
          <p>
            {dungeon.shortName} · {dungeon.levelRange} · {dungeon.zone}
          </p>
        </div>
      </header>

      <section className="map-canvas" aria-label={`${dungeon.name} map`}>
        <TransformWrapper
          key={dungeon.id}
          initialScale={1}
          minScale={0.8}
          maxScale={4}
          centerOnInit
          wheel={{
            step: 0.005,
            smoothStep: 0.002,
          }}
          doubleClick={{
            disabled: true,
          }}
          panning={{
            velocityDisabled: true,
          }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="map-controls">
                <button type="button" onClick={() => zoomOut()}>
                  −
                </button>

                <button type="button" onClick={() => resetTransform()}>
                  Reset
                </button>

                <button type="button" onClick={() => zoomIn()}>
                  +
                </button>
              </div>

              <TransformComponent
                wrapperClass="map-transform-wrapper"
                contentClass="map-transform-content"
              >
                <img
                  className="map-image"
                  src={dungeon.mapSrc}
                  alt={`${dungeon.name} map`}
                  draggable="false"
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </section>
    </main>
  );
}
