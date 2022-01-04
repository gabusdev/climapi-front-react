import { useEffect, useState } from "react";

export function useFetch<T>(q: string, d: number = 3) {
  const [forecast, setForecast] = useState<T>();

  useEffect(() => {
    fetch(`https://localhost:6060/api/v1/Weather/${q}/forecast/${d}`)
      .then((response) => {
        if (!response.ok) throw new Error("Imposible to fetch data :(");
        return response.json();
      })
      .then((data) => {
        setForecast(data);
      });
  }, [q, d]);

  return forecast;
}
