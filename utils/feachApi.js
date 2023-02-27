import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "03e028b7bfmsh704c9ef3008b970p19c6d6jsn57a83c6e543d",
    },
  });

  return data;
};
