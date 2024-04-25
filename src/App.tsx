import { useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import DataLoader from "./components/DataLoader";
import MapComponent from "./components/MapComponent";
import Tooltip from "./components/Tooltip";
import mapboxgl from "mapbox-gl"; // Ensure you have mapbox-gl installed and imported

export default function App() {
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event: mapboxgl.MapMouseEvent) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];

    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y });
  }, []);

  return (
    <DataLoader>
      {(data) => (
        <>
          <MapComponent data={data} onHover={onHover} />
          <Tooltip hoverInfo={hoverInfo} />
        </>
      )}
    </DataLoader>
  );
}

export function renderToDom(container: HTMLElement) {
  createRoot(container).render(<App />);
}

