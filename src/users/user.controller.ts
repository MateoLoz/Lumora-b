import { Request, Response } from "express";
import { createUser, getUserByEmail, getUserByName } from "./users.service";
import { IUserCreate } from "./users.types";
import { hashPassword } from "../utils/encriptpassword";
export async function createUserController(req: Request, res: Response) {
  try {
    const payload: IUserCreate = req.body;

    if (!payload.user_name || !payload.password || !payload.email) {
      return res
        .status(400)
        .json({ error: "user_name, password and email are required" });
    }

    const emailIsUsed = await getUserByEmail(payload);
    if (emailIsUsed) {
      return res
        .status(409)
        .json({ error: `Email ${payload.email} already in use` });
    }

    const userNameIsUsed = await getUserByName(payload);

    if (userNameIsUsed) {
      return res
        .status(409)
        .json({ error: `user_name ${payload.user_name} already in use` });
    }
    payload.password = hashPassword(payload.password);

    const { data, error } = await createUser(payload);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
