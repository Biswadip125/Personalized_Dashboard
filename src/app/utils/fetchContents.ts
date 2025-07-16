import axios from "axios";

export const fetchNews = async (categories: string[]) => {
  const res = await axios.get(
    `https://newsdata.io/api/1/latest?apikey=${
      process.env.NEXT_PUBLIC_NEWS_API_KEY
    }&q=trending&language=en&category=${categories.join(",")}`
  );

  return res.data;
};

export const fetchMovies = async () => {
  const apiKey = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;
  console.log(apiKey);
  if (!apiKey) {
    throw new Error("Apikey is not present");
  }
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  try {
    const res = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
