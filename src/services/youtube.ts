import YoutubeReponse from "../models/YoutubeResponse";

// Youtube API
const YOUTUBE_API_KEY: string = 'AIzaSyCJPa3yhvDXsEfWA0p601WYY4t9_QiRS2w';
const YOUTUBE_API_SEARCH: string = 'https://content-youtube.googleapis.com/youtube/v3/search';
const DUMMY_KEYWORKD: string = 'harina';
const ALLOWED_CHANNELS: Array<string> = [
  'UCGB4DmXYX8gjg-R2BKb7JmQ'  // Agustina Liporace
];

export async function getShorts(keyword: string): Promise<YoutubeReponse | undefined> {
  // @TODO use keywords
  // const dummyPromise = Promise.resolve('m-bTLXjSh_Q');
  try {
    const response = await fetch(`${YOUTUBE_API_SEARCH}?part=id&channelId=${ALLOWED_CHANNELS[0]}&key=${YOUTUBE_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
