import YoutubeResponseItem from "./YoutubeResponseItem";

export default interface YoutubeReponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: Array<YoutubeResponseItem>;
}
