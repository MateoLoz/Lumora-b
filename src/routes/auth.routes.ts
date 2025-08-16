import { Router } from "express";
import {
  login,
  refresh,
  logout,
  userIsLogged,
} from "../controller/auth.Controller";

const router = Router();

router.post("/login", login);
router.get("/auth/me", userIsLogged);
router.post("/refresh", refresh);
router.post("/logout", logout);

export default router;
