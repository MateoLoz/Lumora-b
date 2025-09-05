import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.ACCESS_SECRET as string;
const REFRESH_SECRET = process.env.REFRESH_SECRET as string;

export interface TokenPayload {
  id: number;
  email: string;
}

export function generateTokens(payload: TokenPayload) {
  const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });

  return { accessToken, refreshToken };
}

function verifyToken(token: string, secret: string): TokenPayload {
  const decoded = jwt.verify(token, secret);

  if (typeof decoded === "string" || !decoded) {
    throw new Error("Invalid token");
  }

  if (!("id" in decoded) || !("email" in decoded)) {
    throw new Error("Invalid token payload");
  }

  return decoded as TokenPayload;
}

export function verifyAccess(token: string): TokenPayload {
  return verifyToken(token, ACCESS_SECRET);
}

export function verifyRefresh(token: string): TokenPayload {
  return verifyToken(token, REFRESH_SECRET);
}
