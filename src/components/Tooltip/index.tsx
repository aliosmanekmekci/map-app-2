// Tooltip.tsx
import React from "react";

interface TooltipProps {
  hoverInfo: {
    feature: any;
    x: number;
    y: number;
  } | null;
  countryData: any[]; // Covid verilerini alacak prop
}

const Tooltip: React.FC<TooltipProps> = ({ hoverInfo, countryData }) => {
  if (!hoverInfo) return null;

  console.log(hoverInfo, countryData);
  // GEOJSON verisini ve Covid verilerini birleştir
  const countryInfo = countryData.find(
    (country) => country.countryInfo.iso3 === hoverInfo.feature.properties
  );

  return (
    <div className="tooltip" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
      <div>{hoverInfo.feature.properties.name}</div>
      {countryInfo && <div>{countryInfo.cases} cases</div>}
    </div>
  );
};

export default Tooltip;
