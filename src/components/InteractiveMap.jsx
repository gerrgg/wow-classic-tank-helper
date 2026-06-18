import { useEffect, useMemo, useState } from "react";
import { CRS, divIcon } from "leaflet";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import LootPopup from "./LootPopup";

function DungeonMapUpdater({ bounds }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(bounds, {
      animate: false,
      padding: [24, 24],
    });
  }, [map, bounds]);

  return null;
}

function CoordinateLogger({ onClickCoordinate }) {
  useMapEvents({
    click(event) {
      const x = Math.round(event.latlng.lng);
      const y = Math.round(event.latlng.lat);

      console.log(`Map coordinate: x: ${x}, y: ${y}`);

      onClickCoordinate({
        x,
        y,
      });
    },
  });

  return null;
}

function createDebugIcon() {
  return divIcon({
    className: "debug-marker",
    html: `<span></span>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}

function createBossIcon(label) {
  return divIcon({
    className: "boss-marker-root",
    html: `
      <div class="boss-marker">
        <span class="boss-marker__dot"></span>
        <span class="boss-marker__label">${label}</span>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

export default function InteractiveMap({ dungeon }) {
  const [debugCoordinate, setDebugCoordinate] = useState(null);

  const bounds = useMemo(() => {
    return [
      [0, 0],
      [dungeon.height, dungeon.width],
    ];
  }, [dungeon.height, dungeon.width]);

  const center = useMemo(() => {
    return [dungeon.height / 2, dungeon.width / 2];
  }, [dungeon.height, dungeon.width]);

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

      <section className="map-canvas">
        <MapContainer
          key={dungeon.id}
          crs={CRS.Simple}
          center={center}
          zoom={0}
          minZoom={-2}
          maxZoom={3}
          zoomSnap={0.25}
          zoomDelta={0.25}
          wheelPxPerZoomLevel={220}
          maxBounds={[
            [-dungeon.height * 0.5, -dungeon.width * 0.5],
            [dungeon.height * 1.5, dungeon.width * 1.5],
          ]}
          className="leaflet-map"
        >
          <DungeonMapUpdater bounds={bounds} />
          <CoordinateLogger onClickCoordinate={setDebugCoordinate} />

          <ImageOverlay url={dungeon.mapSrc} bounds={bounds} />

          {debugCoordinate && (
            <Marker
              position={[debugCoordinate.y, debugCoordinate.x]}
              icon={createDebugIcon()}
            />
          )}

          {dungeon.markers?.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.y, marker.x]}
              icon={createBossIcon(marker.label)}
            >
              <Popup
                maxWidth={260}
                minWidth={220}
                className="wow-loot-popup"
                closeButton={false}
              >
                <LootPopup marker={marker} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </main>
  );
}
