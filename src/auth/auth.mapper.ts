import type { DbUser } from "./auth.types";
import type{ UserAuthDto } from "./auth.dto";

export function toAuthUserDto (user : DbUser) : UserAuthDto {
    return {
       id: user.id,
       email: user.email,
       name: user.user_name
    }
}