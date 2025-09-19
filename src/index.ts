import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import cors from "cors";
import "dotenv/config";
import AppRouter from "./router/app.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
const server = createServer(app);
const wss = new WebSocketServer({ server });
const port = 3035;



wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === 1) client.send(msg);
    });
  });
  ws.send('hello from web socket!');
});

app.get("/", (_, res) => res.json("Hola Express + WS"));

app.use("/api", AppRouter);

app.listen(process.env.PORT, () => console.log(`runing or port ${port}`));


export default app