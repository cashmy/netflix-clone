
export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY2;
  const BASE_URL = "youtube.googleapis.com/youtube/v3";
  const searchUrl = `https://${BASE_URL}/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`;

  const popularUrl = `https://${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${YOUTUBE_API_KEY}`;

  try {
    const url = searchQuery === 'popular' ? popularUrl : searchUrl;
    const response = await fetch(url);
    const data = await response.json();

    if (data?.error) {
      console.error(`YouTube API Error:`, data.error);
      return [];
    }

    return data?.items.map(item => {
      return {
        id: item?.id?.videoId || item?.id || "",
        imgUrl: item.snippet.thumbnails.high.url,
        title: item.snippet?.title,
        description: item.snippet.description,
        channel: item.snippet.channelTitle,
        // views: item.statistics.viewCount,
        timestamp: item.snippet.publishedAt,
        // channelImg: item.snippet.thumbnails.high.url,
      }
    });
  } catch (error) {
    console.error(`Something went wrong with the video library call - ${error}`);
    return [];
  }
}

