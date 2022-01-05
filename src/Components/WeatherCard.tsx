import { FunctionComponent } from "react";
import { ICurrent } from "../Models/Models";
import { Card, Col, Row } from "react-bootstrap";

interface WeatherCardProps {
  forecast: ICurrent;
}

const WeatherCard: FunctionComponent<WeatherCardProps> = ({ forecast }) => {
  return (
    <>
      <Card style={{ width: "20rem" }} className='mx-auto'>
        <Card.Header as='h3'>{forecast.location.name}</Card.Header>
        <Card.Title className='py-1'>
          <h5>
            {forecast.location.region},{forecast.location.country}
          </h5>
        </Card.Title>
        <Card.Subtitle>
          <h6>
            Lat: {forecast.location.lat} Lon: {forecast.location.lon}
          </h6>
        </Card.Subtitle>
        <Card.Img
          variant='top'
          src={forecast.icon}
          alt={forecast.condition}
          className='px-5 py-1'
        />
        <hr />
        <Card.Body>
          <Row>
            <Col xs='6'>
              <p>{forecast.temp_c} °C</p>
              <p>{forecast.temp_f} °F</p>
            </Col>
            <Col xs='6'>
              <p>
                {forecast.wind} km/h {forecast.wind_dir}
              </p>
              <p>{forecast.location.localtime}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default WeatherCard;
