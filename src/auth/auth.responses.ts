import { IRefreshTokenInsert } from "./auth.types";


export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user: {
    email: string;
    name: string;
  };
}

export interface LogoutResponse {
  message: string; 
}

export class LoginResponseDto implements LoginResponse {
  constructor(
     public accessToken: string,
    public user: { id: number; email: string; name: string },
    public refreshToken?: string
  ){}
}

export interface DbRefreshToken  {
 user_id:IRefreshTokenInsert['user_id'],
 TOKEN:IRefreshTokenInsert['TOKEN'],
}

export class dbRefreshTokenDto implements DbRefreshToken {

  constructor(
    public user_id:DbRefreshToken['user_id'],
    public TOKEN: DbRefreshToken['TOKEN'],
  ){
 
  }
 
}