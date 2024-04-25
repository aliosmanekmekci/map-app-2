import React, { useEffect, useState } from "react";

interface DataLoaderProps {
  children: (data: unknown) => React.ReactNode;
}

const DataLoader: React.FC<DataLoaderProps> = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
    )
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Could not load data", err));
  }, []);

  return data ? children(data) : null;
};

export default DataLoader;
