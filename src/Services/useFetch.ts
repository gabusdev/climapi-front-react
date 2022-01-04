import { useEffect, useState } from "react";
import { iForecast } from "../Models/Models";

export const useFetch = (q: string, d: number = 3) => {
  const [forecast, setForecast] = useState<iForecast>();

  useEffect(() => {
    fetch(`https://localhost:6060/api/v1/Weather/${q}/forecast/${d}`)
      .then((response) => {
        if (!response.ok) throw new Error("Imposible to fetch data :(");
        return response.json();
      })
      .then((data) => {
        return setForecast(data);
      });
  }, [q, d]);

  return forecast;
};
