import { Request, Response, NextFunction } from "express";
import { verifyAccess, TokenPayload } from "../utils/jwt";

export interface AuthRequest extends Request {
  user?: TokenPayload;
}

export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const user = verifyAccess(token);
    req.user = user;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
}
