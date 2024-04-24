import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Map, { Layer, Source, useMap } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWxpb3NtYW5la21la2NpIiwiYSI6ImNsdmRzczV2NDAyNWYya285dzR5dGI1c2UifQ.fP82zA0upbGwlIFuWlmu8g"; // Set your mapbox token here

export default function App() {
  const [year, setYear] = useState(2015);
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const { current } = useMap();

  console.log(current);

  useEffect(() => {
    /* global fetch */
    fetch(
      "https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson"
    )
      .then((resp) => resp.json())
      .then((json) => setAllData(json))
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, []);

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
      >
        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer
            {...{
              id: "counties",
              type: "fill",
              "source-layer": "original",
              paint: {
                "fill-outline-color": "orange",
                "fill-color": "rgba(55,55,55,0.5)",
              },
            }}
          />
        </Source>
      </Map>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
