import { Request, Response } from "express";
import { getMessagesByRoomId, createMessage } from "./messages.service";
import { IMessagesInsert } from "./messages.types";

export async function addMessage(req: Request, res: Response) {
  try {
    const payload: IMessagesInsert = req.body;
    if (!payload.content && !payload.media) {
      return res.status(422).json({ error: "missing required fields" });
    }

    const messageResult = await createMessage(payload);

    res.status(201).json({
      response: "message created succesfully",
      messageResponse: messageResult,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getMessagesfromRoom(req: Request, res: Response) {
  try {
    const room_id: number = req.body;

    const messages = getMessagesByRoomId(room_id);

    return res.status(200).json({ messages });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
