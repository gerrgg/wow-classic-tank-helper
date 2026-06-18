import { useEffect } from "react";
import { useMap } from "react-leaflet";
import image from "../assets/loot-table.png";

export default function LootPopup({ marker }) {
  const map = useMap();

  useEffect(() => {
    window.$WowheadPower?.refreshLinks?.();
  }, [marker.id]);

  return (
    <div className="wow-loot-frame">
      <div className="wow-loot-frame__portrait">
        <img src={image} alt="wow skull" />
      </div>

      <div className="wow-loot-frame__titlebar">
        <span>Items</span>

        <button
          type="button"
          className="wow-loot-frame__close"
          aria-label="Close loot window"
          onClick={() => map.closePopup()}
        >
          ×
        </button>
      </div>

      <div className="wow-loot-frame__body">
        <div className="wow-loot-list">
          {marker.loot?.map((item) => (
            <a
              key={item.id}
              className="wow-loot-row"
              href={item.url}
              data-wowhead={`item=${item.id}&domain=classic`}
              data-wh-icon-size="medium"
              data-wh-rename-link="true"
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
