import { FunctionComponent, useEffect, useState } from "react";
import { Button, Col, Container, Row, Stack, Form } from "react-bootstrap";
import { ICurrent, IForecast } from "../Models/Models";
import { useFetch } from "../Services/useFetch";
import Forecast from "./Forecast";
import Formulario from "./Formulario";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [q, setQ] = useState("havana");
  const [d, setD] = useState(3);
  const forecast = useFetch<ICurrent>(q, d);

  const handleQChange = (newQ: string) => {
    setQ(newQ);
  };

  // useEffect(() => {
  //   console.log(q);
  // }, [q]);

  return (
    <>
      <div className='home'>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col xs='12' sm='8' md='6' className='text-center'>
              <Stack gap={3}>
                <Formulario onSubmit={handleQChange} />
                {forecast && <Forecast forecast={forecast} />}
              </Stack>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
