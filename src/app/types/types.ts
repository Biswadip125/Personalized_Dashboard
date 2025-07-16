export type NewsData = {
  ai_org?: string;
  ai_region?: string;
  ai_tag?: string;
  article_id: string;
  category: string[];
  content: string;
  country: string[];
  creator: string | null;
  description: string;
  duplicate: boolean;
  image_url: string;
  keywords: string[];
  language: string;
  link: string;
  pubDate: string; // e.g., "2025-07-14 15:40:00"
  pubDateTZ: string; // e.g., "UTC"
  sentiment: string;
  sentiment_stats: string;
  source_icon: string;
  source_id: string;
  source_name: string;
  source_priority: number;
  source_url: string;
  title: string;
  video_url: string | null;
};

export type movieData = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SocialPost = {
  id: string;
  username: string;
  handle: string;
  avatar: string;
  content: string;
  hashTags: string[];
  createdAt: string;
  platform: string;
};

export type moviesData = {
  page: number;
  results: movieData[];
  total_pages: number;
  total_results: number;
};

export type newsesData = {
  nextPage: number;
  results: NewsData[];
  status: string;
  totalResults: string;
};
