import { FunctionComponent } from "react";
import { Spinner } from "react-bootstrap";
import { ICurrent, IForecast } from "../Models/Models";
import Fetching from "./Fetching";
import WeatherCard from "./WeatherCard";

interface ForecastProps {
  forecast: ICurrent;
  fetching: boolean;
}

const Forecast: FunctionComponent<ForecastProps> = ({ forecast, fetching }) => {
  return (
    <div className='forecast'>
      {fetching ? <Fetching /> : <WeatherCard forecast={forecast} />}
    </div>
  );
};

export default Forecast;
