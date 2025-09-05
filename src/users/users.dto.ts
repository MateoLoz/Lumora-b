import { IUser } from "./users.types";

export interface UserDrawDTO {
  id: IUser["id"];
  avatar_name: IUser["avatar_name"];
  avatar_url: IUser["avatar_url"];
  email: IUser["email"];
}

export interface UserCreatedResponseDTO {
  createdAt:IUser['created_at'];
  userName:IUser['user_name'];
  email:IUser['email']
}