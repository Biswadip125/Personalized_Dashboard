import axios from "axios";

export const fetchTrendingmovies = async (page: number = 1) => {
  const apiKey = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;

  if (!apiKey) throw new Error("apiKey is not present");
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
      }
    );
    return res.data.results;
  } catch (err) {
    console.log("Failed to fetch trending movies", err);
  }
};

export const fetchTrendingNews = async (
  categories: string[],
  nextPage?: string
) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  if (!apiKey) throw new Error("apiKey is not present");

  const baseUrl = "https://newsdata.io/api/1/latest";
  let url = `${baseUrl}?apikey=${apiKey}&q=trending`;

  if (categories.length > 0) {
    url += `&category=${categories.join(",")}`;
  }

  if (nextPage) {
    url += `&page=${nextPage}`;
  }
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log("Failed to fetch trending movies", err);
  }
};
