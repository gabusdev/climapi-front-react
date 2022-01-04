import { FunctionComponent } from "react";
import { ICurrent, IForecast } from "../Models/Models";

interface ForecastProps {
  forecast: ICurrent;
}

const Forecast: FunctionComponent<ForecastProps> = ({ forecast }) => {
  return (
    <div className='forecast'>
      <h3>{forecast.location?.name}</h3>
      <p>Hora Local: {forecast.location?.localtime}</p>
      <p>{`${forecast.temp_c} °C`}</p>
    </div>
  );
};

export default Forecast;
