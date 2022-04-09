export type SearchResultVideo = {
  "etag": string,
  "id": {
    "kind": "youtube#video",
    "videoId": string,
  }
  "kind": "youtube#searchResult",
  "snippet": {
    "channelId": string,
    "channelTitle": string,
    "description": string,
    "liveBroadcastContent": string,
    "publishedTime": string,
    "publishedAt": string,
    "thumbnails": {
      "default": {
        "url": string,
        "width": number,
        "height": number
      },
      "high": {
        "url": string,
        "width": number,
        "height": number
      },
      "medium": {
        "url": string,
        "width": number,
        "height": number
      }
    },
    "title": string,
  }
}