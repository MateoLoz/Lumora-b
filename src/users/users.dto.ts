import { IUser } from "./users.types";

export interface UserDTO {
  id: IUser["id"];
  avatar_name: IUser["avatar_name"];
  avatar_url: IUser["avatar_url"];
  email: IUser["email"];
}
