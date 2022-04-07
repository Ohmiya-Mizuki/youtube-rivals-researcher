export const researchChannel = async (channelId: string) => {
  const res = await fetch(
    `${process.env.YOUTUBE_API_SEARCH_URL}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&channelId=${channelId}&order=viewCount`
  );
  const data = await res.json()
  const bestVideoList = await data.items
  
};
