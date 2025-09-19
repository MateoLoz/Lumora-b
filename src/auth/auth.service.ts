import { supabase } from "../lib/supabaseClient";
import { generateTokens } from "../utils/jwt";
import type { LoginDto, UserAuthDto } from "./auth.dto";
import { LoginResponse } from "./auth.responses";
import { DbUser, IRefreshTokenInsert, IRefreshTokenUpdate, RefreshTokenRow } from "./auth.types";

export async function login (user: UserAuthDto) {

    const tokens = generateTokens(user);

    return tokens;
}

export async function getUserByEmail(payload : LoginDto) : Promise<DbUser | null> {
    const {data , error} = await supabase
    .from('users')
    .select("id,email,password,user_name")
    .eq("email",payload.email)
    .maybeSingle();

    if(error) throw error

    if (data) return data

    return null

}

export async function updateRefreshToken(payload : IRefreshTokenInsert) : Promise<boolean> {
  const { error } = await supabase
   .from('refresh_tokens')
   .update(payload).eq("user_id",payload.user_id);
   if (error) {
    console.log(error);
    return false;
   }

   return true;
   
}

export async function getRefreshTokenByUserId(userId : number) : Promise<RefreshTokenRow | null> {
    const {data, error} = await supabase
    .from('refresh_tokens')
    .select("*").eq("user_id", userId)
    .maybeSingle()
    if(error) {
    console.log("error fetching refresh_token",error);
    return null
    }
   return data;
}

export async function insertRefreshToken(payload : IRefreshTokenInsert): Promise<boolean> {
    const { error } = await supabase
   .from('refresh_tokens')
   .insert(payload);
   if (error) {
    console.log(error);
    return false;
   }

   return true;
}