import axios from "axios";

export const searchImages = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID V8KH-uMRo9uYUIcWCW-KPz5oPap2mqiDGGcfNwwnDeM",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
