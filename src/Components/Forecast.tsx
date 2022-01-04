import { FunctionComponent } from "react";
import { Spinner } from "react-bootstrap";
import { ICurrent, IForecast } from "../Models/Models";

interface ForecastProps {
  forecast: ICurrent;
  fetching: boolean;
}

const Forecast: FunctionComponent<ForecastProps> = ({ forecast, fetching }) => {
  return (
    <div className='forecast'>
      {fetching && (
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
      )}
      <h3>
        {forecast.location?.name},{forecast.location.country},
        {forecast.location.region}
      </h3>
      <p>Hora Local: {forecast.location?.localtime}</p>
      <p>{`${forecast.temp_c} °C`}</p>
    </div>
  );
};

export default Forecast;
