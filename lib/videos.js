
export const fetchVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY2;
  const BASE_URL = "youtube.googleapis.com/youtube/v3";

  // try {
    // const url = searchQuery === 'popular' ? popularUrl : searchQuery === "detail" ? detailLustUrl : searchUrl;
    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
      );
    return await response.json();

  //   if (data?.error) {
  //     console.error(`YouTube API Error:`, data.error);
  //     return [];
  //   }

  //   return data?.items.map(item => {
  //     return {
  //       id: item?.id?.videoId || item?.id || "",
  //       imgUrl: item.snippet.thumbnails.high.url,
  //       title: item.snippet?.title,
  //       description: item.snippet.description,
  //       channel: item.snippet.channelTitle,
  //       // views: item.statistics.viewCount,
  //       timestamp: item.snippet.publishedAt,
  //       // channelImg: item.snippet.thumbnails.high.url,
  //     }
  //   });
  // } catch (error) {
  //   console.error(`Something went wrong with the video library call - ${error}`);
  //   return [];
  // }
}

export const getCommonVideos = async (url) => {
  try {
    const isDev = process.env.DEVELOPMENT;
    const data = isDev ? videoTestData : await fetchVideos(url);
    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }
    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      const snippet = item.snippet;
      return {
        title: snippet?.title,
        imgUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` ,
        id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
      };
    });
  } catch (error) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);
};

export const getYoutubeVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(URL);
};