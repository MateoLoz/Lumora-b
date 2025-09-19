import { Router } from "express";
import { AvatarGetUserController } from "../avatar/avatar.controller";

const routes = Router();

routes.get('/', AvatarGetUserController);

export default routes;