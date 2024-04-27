// CovidData.tsx
import axios from "axios";

export const fetchCovidData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching COVID data:", error);
    return [];
  }
};
