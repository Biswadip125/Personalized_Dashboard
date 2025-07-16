import axios from "axios";

export const fetchNewsResultsByQuery = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  if (!apiKey) throw new Error("apiKey is not present");
  try {
    const res = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${query}&language=en`
    );
    return res.data.results;
  } catch (err) {
    console.log("Failed to fetch searched results", err);
  }
};

export const fetchMoviesByQuery = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;
  if (!apiKey) throw new Error("apiKey is not present");

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
      }
    );
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    console.log("Failed to Fetch search results", err);
  }
};
