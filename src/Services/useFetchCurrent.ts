import { ICurrent } from "../Models/Models";
import { useFetch } from "./useFetch";

const useFetchCurrent = (q: string, d: number) => {
  const response = useFetch<ICurrent>(q, d);
  return { response, status: 1 };
};

export default useFetchCurrent;
