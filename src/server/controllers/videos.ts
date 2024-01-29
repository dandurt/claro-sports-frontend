import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

router.get("/api/v1/videos/events/sochi", async (_: Request, res: Response) => {
  return res.status(200).send([
    {
      id: uuid(),
      url: "https://www.youtube.com/embed/XsfKmKW7igs",
      title: "Olympic Snowboarding",
      country: "México",
      description: "Ski Alpiano",
      posterUrl: "/static/images/sochi/sochi-f.jpeg",
      imagePreview: "/static/images/sochi/team-latam.png",
      previewText: "TEAM LATAM",
    },
    {
      id: uuid(),
      url: "https://www.youtube.com/embed/XsfKmKW7igs",
      title: "Olympic Podio",
      country: "Peru",
      description: "Ski Alpiano",
      posterUrl: "/static/images/sochi/podio.jpeg",
      imagePreview: "/static/images/sochi/travel-meets-fashion.png",
      previewText: "TRAVEL MEETS FASHION",
    },
    {
      id: uuid(),
      url: "https://www.youtube.com/embed/XsfKmKW7igs",
      title: "Olympic Flag",
      country: "Argentina",
      description: "Ski Alpiano",
      posterUrl: "/static/images/sochi/bandera.jpeg",
      imagePreview: "/static/images/sochi/velocidad-riesgo.png",
      previewText: "VELOCIDAD Y RIESGO",
    },
    {
      id: uuid(),
      url: "https://www.youtube.com/embed/XsfKmKW7igs",
      title: "Olympic City",
      country: "Rusia",
      description: "Ski Alpiano",
      posterUrl: "/static/images/sochi/ciudad.jpeg",
      imagePreview: "/static/images/sochi/experiencia.png",
      previewText: "EXPERIENCIA MULTIMEDIA",
    },
  ]);
});

export default router;
