import { Request, Response } from "express";
import {  IUserCreate } from "./users.types";
import { createUserService } from "./user.createUser.service";

export async function createUserController(req: Request, res: Response) {
    const payload : IUserCreate = req.body;
    const userDto = await createUserService(payload);
    return res.status(201).json(userDto);
}
