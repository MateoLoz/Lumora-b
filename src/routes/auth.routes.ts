import { Router } from "express";
import {
  refresh,
  logout,
  userIsLogged,
} from "../controller/auth.Controller";

import { loginAuthController } from "../auth/auth.Controller";
import { validate } from "../middlewares/validate";
import { loginSchema } from "../auth/auth.dto";

const router = Router();

router.post("/login", validate(loginSchema) , loginAuthController);
// router.get("/auth/me", userIsLogged);
// router.post("/refresh", refresh);
// router.post("/logout", logout);

export default router;
