import axios from "axios";

const BASE_URL = "https://numbersapi.p.rapidapi.com";

const options = {
  params: {
    fragment: "true",
    json: "true",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
