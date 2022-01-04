import { FunctionComponent, SyntheticEvent, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { ICurrent, IForecast } from "../Models/Models";

interface FormProps {
  onSubmit: Function;
}

const Formulario: FunctionComponent<FormProps> = ({ onSubmit: changeQ }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    changeQ(query);
  };

  return (
    <div className='form'>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3' hasValidation>
          <FormControl
            placeholder='País o código postal...'
            aria-label='Región'
            required
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Button variant='outline-secondary' id='button-ver' type='submit'>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Ver
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Formulario;
