import { z } from "zod";

export const createUserSchema = z.object({
    user_name:z.string().min(5).max(90),
    email:z.email().max(80),
    password:z.string().min(8).max(45)
})

export type CreateUser = z.infer<typeof createUserSchema>