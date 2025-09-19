import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(5).max(90),
  password: z.string().min(8).max(45),
});

export type LoginDto = z.infer<typeof loginSchema>;

export const logoutSchema = z.object({
  refreshToken: z.string().optional(),
});

export type LogoutDto = z.infer<typeof logoutSchema>;

export type UserAuthDto = {
  id: number;
  email: string;
  name:string;
}