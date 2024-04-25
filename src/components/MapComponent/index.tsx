// MapComponent.tsx
import React from "react";
import Map, { Layer, Source } from "react-map-gl";
import { dataLayer } from "../map-style/map-style";

interface MapComponentProps {
  data: unknown;
  onHover: (event: unknown) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ data, onHover }) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxpb3NtYW5la21la2NpIiwiYSI6ImNsdmRzczV2NDAyNWYya285dzR5dGI1c2UifQ.fP82zA0upbGwlIFuWlmu8g";

  return (
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
      <Source
        type="geojson"
        data={data as GeoJSON.FeatureCollection<GeoJSON.Geometry>}
      >
        <Layer {...dataLayer} />
      </Source>
    </Map>
  );
};

export default MapComponent;
