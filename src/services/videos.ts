import { client } from "./api";

export const fetchVideos = async () =>
  client.get("/api/v1/videos/events/sochi");
