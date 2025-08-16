import { Router } from "express";
import { createUserController } from "../users/user.controller";

const router = Router();

router.post("/users", createUserController);

export default router;
