// App.tsx
import { useCallback, useEffect, useState } from "react";
import DataLoader from "./components/DataLoader";
import MapComponent from "./components/MapComponent";
import Tooltip from "./components/Tooltip";

import { createRoot } from "react-dom/client";
import { fetchCovidData } from "./components/CovidData";

export default function App() {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCovidData();
      setCountryData(data);
    };

    loadData();
  }, []);

  const onHover = useCallback((event) => {
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
          <Tooltip hoverInfo={hoverInfo} countryData={countryData} />
        </>
      )}
    </DataLoader>
  );
}
export function renderToDom(container: HTMLElement) {
  createRoot(container).render(<App />);
}
