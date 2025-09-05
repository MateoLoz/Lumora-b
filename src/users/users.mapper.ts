import { IUser } from "./users.types";
import { UserCreatedResponseDTO, UserDrawDTO } from "./users.dto";

export function toUserDTO(user: IUser): UserDrawDTO {
  return {
    id: user.id,
    avatar_name: user.avatar_name,
    avatar_url: user.avatar_url,
    email: user.email,
  };
}

export function toUsersDTOs(users: IUser[]): UserDrawDTO[] {
  return users.map(toUserDTO);
}

export function toUserCreatedDTO(user:IUser): UserCreatedResponseDTO {
  return {
    createdAt:user.created_at,
    userName:user.user_name,
    email:user.email
  }
}

export function toUsersCreatedDTO(users: IUser[]): UserCreatedResponseDTO[] {
  return users.map(toUserCreatedDTO)
}