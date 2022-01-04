import { FunctionComponent } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Row,
  Spinner,
  SplitButton,
} from "react-bootstrap";

interface RcTesProps {}

const RcTes: FunctionComponent<RcTesProps> = () => {
  return (
    <>
      <Container>
        <Button variant='primary' disabled>
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          <span className='visually-hidden'>Loading...</span>
        </Button>{" "}
        <Button variant='primary' disabled>
          <Spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Loading...
        </Button>
      </Container>
    </>
  );
};

export default RcTes;
