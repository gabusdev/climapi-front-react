import { FunctionComponent, useEffect, useState } from "react";
import { ICurrent, IForecast } from "../Models/Models";
import { useFetch } from "../Services/useFetch";
// import { useFetch } from "../Services/useFetch";
import Forecast from "./Forecast";
import Form from "./Form";

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
    <div className='home'>
      <Form onSubmit={handleQChange} />
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default Home;
