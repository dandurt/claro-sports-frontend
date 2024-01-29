import { client } from "./api";

export const fetchVideos = async () =>
  client.get<any>("/api/v1/videos/events/sochi");
