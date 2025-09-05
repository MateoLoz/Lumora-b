import Router from "express";
import { errorHandler } from "../middlewares/errorHandler";
import UserRoutes from "../routes/users.routes";
import AuthRoutes from "../routes/auth.routes";
const router = Router();

router.use(errorHandler);
router.use("/users", UserRoutes);
router.use("/auth", AuthRoutes);

export default router;
