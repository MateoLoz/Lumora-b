import { IUser } from "./users.types";
import { UserDTO } from "./users.dto";

export function toUserDTO(user: IUser): UserDTO {
  return {
    id: user.id,
    avatar_name: user.avatar_name,
    avatar_url: user.avatar_url,
    email: user.email,
  };
}

export function toUsersDTOs(users: IUser[]): UserDTO[] {
  return users.map(toUserDTO);
}
