import { URL, PARAMS } from "../constants/";

export const fetchData = async (id, endpoint, method = "GET") => {
  const response = await fetch(URL + endpoint + "/" + id + PARAMS, {
    method,
  });
  const { status } = response;

  if (status !== 200) {
    throw new Error(status);
  }

  const { data } = await response.json();
  return data;
};
