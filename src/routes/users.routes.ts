import { Router } from "express";
import { createUserController } from "../users/user.controller";
import { createUserSchema } from "../validators/users.validator";
import { validate } from "../middlewares/validate";

const router = Router();

router.post("/createAccount", validate(createUserSchema), createUserController);

export default router;
