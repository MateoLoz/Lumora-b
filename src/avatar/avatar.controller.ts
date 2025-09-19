import { Request, Response } from "express";
import { getAllAvatarsService } from "./avatar.getAllAvatars.service";

export async function AvatarGetUserController (req: Request, res: Response) {
 const responseDto = await getAllAvatarsService();
  if(!responseDto) return res.status(404).json("avatars not found!");

  return res.status(200).json(responseDto);
}