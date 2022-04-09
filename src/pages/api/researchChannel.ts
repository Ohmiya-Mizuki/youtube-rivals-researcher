const { Client } = require("@notionhq/client");

export const researchChannel = async (channelId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_YOUTUBE_API_SEARCH_URL}?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&channelId=${channelId}&order=viewCount`
  );
  const data = await res.json();
  const bestVideoList = await data.items;
  writeNotion(bestVideoList);
  return bestVideoList;
};

const writeNotion = async (bestVideoList) => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
  });
  console.log("NOTION_TOKEN", process.env.NEXT_PUBLIC_NOTION_TOKEN);
  
  const bookmarksjson = bestVideoList.map((video) => {
    return {
      object: "block",
      type: "bookmark",
      bookmark: {
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      },
    };
  })
  
  const response = await notion.pages.create({
    parent: {
      page_id: "YouTuber-10-82a996c023c44c109d906e7aed8598ef",
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: bestVideoList[0].snippet.channelTitle,
            },
          },
        ],
      },
    },
    children: bookmarksjson,
  });
  return response;
};
