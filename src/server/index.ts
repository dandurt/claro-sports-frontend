import express, { Express } from "express";
import next from "next";
import videos from "./controllers/videos";
import bodyParser from "body-parser";

const port = process.env.PORT || 80;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();

  const server: Express = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(videos);

  server.get("/", (_, res) => {
    return res.redirect("/events/sochi-2014");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
