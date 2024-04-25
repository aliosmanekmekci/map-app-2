import type GeoJSON from "geojson";

export function updatePercentiles(
  featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  accessor: (f: GeoJSON.Feature<GeoJSON.Geometry>) => number
): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
  const { features } = featureCollection;

  // Function to generate a random HSL color
  const randomHSLColor = () => {
    const hue = Math.floor(Math.random() * 360); // Hue is a degree on the color wheel from 0 to 360.
    const saturation = 80; // Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
    const lightness = 60; // Lightness is also a percentage; 0% is black, 100% is white.
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return {
    type: "FeatureCollection",
    features: features.map((f) => {
      const properties = {
        ...f.properties,
        color: randomHSLColor(), // Assign a random HSL color to each feature
      };
      return { ...f, properties };
    }),
  };
}
