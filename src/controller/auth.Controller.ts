import { Request, Response } from "express";
import {
  generateTokens,
  verifyRefresh,
  TokenPayload,
  verifyAccess,
} from "../utils/jwt";

let refreshTokens: string[] = [];

export function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user: TokenPayload = { id: 1, email };

  const { accessToken, refreshToken } = generateTokens(user);
  refreshTokens.push(refreshToken);

  res.json({ accessToken, refreshToken });
}

export function refresh(req: Request, res: Response) {
  const { token } = req.body;
  if (!token || !refreshTokens.includes(token)) return res.sendStatus(403);

  try {
    const user = verifyRefresh(token);
    const { accessToken } = generateTokens({ id: user.id, email: user.email });
    res.json({ accessToken });
  } catch {
    return res.sendStatus(403);
  }
}

export function logout(req: Request, res: Response) {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== token);
  res.sendStatus(204);
}

export function userIsLogged(req: Request, res: Response) {
  const token = req.cookies["access_token"];
  if (!token) return res.status(200).json({ loggedIn: false });
  try {
    const user = verifyAccess(token);
    res.json({ loggedIn: true, user: { id: user.id, email: user.email } });
  } catch {
    res.status(200).json({ loggedIn: false });
  }
}
