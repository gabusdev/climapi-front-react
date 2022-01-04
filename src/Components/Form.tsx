import { FunctionComponent, SyntheticEvent, useState } from "react";

interface FormProps {
  onSubmit: Function;
}

const Form: FunctionComponent<FormProps> = ({ onSubmit: changeQ }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    changeQ(query);
  };

  return (
    <div className='form'>
      <h1>Climapi</h1>
      <form onSubmit={handleSubmit}>
        <label>City:</label>
        <input
          type='text'
          placeholder='City or zip code'
          required
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button>Ver</button>
      </form>
    </div>
  );
};

export default Form;
