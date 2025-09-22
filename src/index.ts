import express from "express";
import logger from "morgan"
import { createServer } from "http";
import {Server} from "socket.io";


import cors from "cors";
import "dotenv/config";
import AppRouter from "./router/app.router";

const app = express();
const server = createServer(app);
const io = new Server(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger('dev'));

io.on('connection', (socket)=> {
  console.log(`User ${socket.id} has connected!`);

socket.on("join-room", ({room , userName, avatar_Url }) => {
socket.join(room);
console.log(`User ${userName} joined roo, ${room}`);
socket.to(room).emit("user_joined", {userName});
})

socket.on("message", ({message, room}) => {
  socket.to(room).emit("message", {sender:"system", message});
})

socket.on("disconnect", () => {
  console.log(`User disconnected: ${socket.id}`);
})

})



app.get("/", (_, res) => res.json("Hola Express + WS"));

app.use("/api", AppRouter);

app.listen(process.env.PORT, () => console.log(`runing or port ${process.env.PORT}`));


export default app