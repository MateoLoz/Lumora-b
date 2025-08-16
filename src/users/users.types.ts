export type UserRow = Database["public"]["Tables"]["users"]["Row"];
type UserInsert = Database["public"]["Tables"]["users"]["Insert"];
type UserUpdate = Database["public"]["Tables"]["users"]["Update"];
export interface IUser {
  avatar_name: UserRow["avatar_name"];
  avatar_url: UserRow["avatar_url"];
  created_at: UserRow["created_at"];
  deleted_at: UserRow["deleted_at"];
  id: UserRow["id"];
  password: UserRow["password"];
  user_name: UserRow["user_name"];
  email: UserRow["email"];
}
export type IUserCreate = UserInsert;
export type IUserUpdate = UserUpdate;
