import { useCallback, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import Map, { Layer, Source } from "react-map-gl";

import { dataLayer } from "./map-style";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWxpb3NtYW5la21la2NpIiwiYSI6ImNsdmRzczV2NDAyNWYya285dzR5dGI1c2UifQ.fP82zA0upbGwlIFuWlmu8g";

export default function App() {
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {

    fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
    )
      .then((resp) => resp.json())
      .then((json) => setAllData(json))
      .catch((err) => console.error("Could not load data", err));
  }, []);

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];

    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  const data = useMemo(() => {
    return allData;
  }, [allData]);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={["data"]}
        onMouseMove={onHover}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
        {hoverInfo && (
          <div
            className="tooltip"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <div>{hoverInfo.feature.properties.name}</div>
          </div>
        )}
      </Map>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
