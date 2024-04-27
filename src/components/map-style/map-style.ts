import type { FillLayer } from "react-map-gl";

export const dataLayer: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": ["get", "color"], 
    "fill-opacity": 0.8,
  },
};
