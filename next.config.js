/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    YOUTUBE_API_KEY: "AIzaSyCEIDLRyOZLIm8Ftf-sI1ibsBsu3ZOx8WU",
    YOUTUBE_API_SEARCH_URL: "https://www.googleapis.com/youtube/v3/search",
  },
};

module.exports = nextConfig;
