import { FunctionComponent } from "react";
import { iForecast } from "../Models/Models";

interface ForecastProps {
  forecast: iForecast;
}

const Forecast: FunctionComponent<ForecastProps> = ({ forecast }) => {
  return (
    <div className='forecast'>
      <h3>{forecast.location?.name}</h3>
      <h4>{`${forecast.temp_c} °C`}</h4>
    </div>
  );
};

export default Forecast;
