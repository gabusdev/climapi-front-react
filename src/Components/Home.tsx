import { FunctionComponent, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { ICurrent, IForecast } from "../Models/Models";
import { useFetch } from "../Services/useFetch";
import { useFetchCurrent } from "../Services/useFetchCurrent";
import Forecast from "./Forecast";
import Formulario from "./Formulario";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [q, setQ] = useState("havana");
  const [d, setD] = useState(3);
  // const [fetching, setFetching] = useState(false);
  const { forecast, isPending: isFetching } = useFetch<ICurrent>(q, d);

  const handleQChange = (newQ: string) => {
    // setFetching(true);
    setQ(newQ);
  };

  // useEffect(() => {
  //   setFetching(false);
  // }, [forecast]);

  return (
    <>
      <div className='home'>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col xs='12' sm='8' md='6' className='text-center'>
              <Stack gap={3}>
                <Formulario onSubmit={handleQChange} />
                {forecast && (
                  <Forecast forecast={forecast} fetching={isFetching} />
                )}
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
