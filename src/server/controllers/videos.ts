import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/v1/videos/events/sochi", (_: Request, res: Response) => {
  return res.send({});
});

export default router;
