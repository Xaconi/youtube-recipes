export default interface YoutubeResponseItem {
  kind: string;
  etag: string;
  id: {
    kind: string,
    videoId: string
  };
}
