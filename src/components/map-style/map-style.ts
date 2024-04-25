import type { FillLayer } from "react-map-gl";

export const dataLayer: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": ["get", "color"], // Use the 'color' property from each feature
    "fill-opacity": 0.8,
  },
};
