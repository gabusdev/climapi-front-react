import { useEffect } from "react";
import { ICurrent } from "../Models/Models";
import { useFetch } from "./useFetch";

export const useFetchCurrent = (q: string, d: number) => {
  const response = useFetch<ICurrent>(q, d);
  // isFetching(false);
  // f();
  console.log("Date:" + Date.now().toString());

  return response;
};
