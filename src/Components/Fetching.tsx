import { FunctionComponent } from "react";
import { Spinner } from "react-bootstrap";

interface FetchingProps {}

const Fetching: FunctionComponent<FetchingProps> = () => {
  return (
    <>
      <Spinner
        as='span'
        animation='grow'
        role='status'
        aria-hidden='true'
        variant='primary'
      />
    </>
  );
};

export default Fetching;
