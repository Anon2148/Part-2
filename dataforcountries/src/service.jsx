import axios from "axios";
const urlBase = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = () => {
  const response = axios.get(`${urlBase}/all`);
  return response.then((response) => response.data);
};

const getOneCountry = ({ name }) => {
  const response = axios.get(`${urlBase}/name/${name}`);
  return response.then((response) => response.data);
};

export default { getAll, getOneCountry };
