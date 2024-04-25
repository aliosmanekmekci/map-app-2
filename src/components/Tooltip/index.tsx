import React from "react";

interface TooltipProps {
  hoverInfo: {
    feature: any;
    x: number;
    y: number;
  } | null;
}

const Tooltip: React.FC<TooltipProps> = ({ hoverInfo }) => {
  if (!hoverInfo) return null;

  return (
    <div className="tooltip" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
      <div>{hoverInfo.feature.properties.name}</div>
    </div>
  );
};

export default Tooltip;
