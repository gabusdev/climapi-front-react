import { FunctionComponent, useState } from "react";
import { Forecast } from "../Models/Models";
import { useFetch } from "../Services/useFetch";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [q, setQ] = useState("Havana");
  const [q2, setQ2] = useState("");
  const [d, setD] = useState(3);
  const forcast = useFetch(q, d);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQ(q2);
  };

  return (
    <div className='home'>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label>City:</label>
        <input
          type='text'
          placeholder='City or zip code'
          required
          value={q2}
          onChange={(e) => {
            setQ2(e.target.value);
            console.log(e);
          }}
        />
        <button>Ver</button>
      </form>
      <h3>{forcast?.location?.name}</h3>
      <h4>{forcast?.temp_c}</h4>
    </div>
  );
};

export default Home;
