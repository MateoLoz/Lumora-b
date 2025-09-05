import { supabase } from "../lib/supabaseClient";
import { toUsersDTOs } from "./users.mapper";
import { IUserCreate, IUserUpdate } from "./users.types";

export async function getUsersPage(page: number, pageSize: number = 10) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .range(from, to);

  if (error) throw error;

  return toUsersDTOs(data || []);
}

export async function getUsersCount(): Promise<number> {
  const { count, error } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  if (error) throw error;

  return count || 0;
}

export async function getUserByEmail(payload: IUserCreate): Promise<boolean> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", payload.email)
    .maybeSingle();
  console.log(data);
  if (error) throw error;
  if (data) return true;
  return false;
}

export async function getUserByName(payload: IUserCreate): Promise<boolean> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_name", payload.user_name)
    .maybeSingle();
  console.log(data);
  if (error) throw error;
  if (data) return true;
  return false;
}

export async function createUser(payload: IUserCreate) {
  const { data, error } = await supabase.from("users").insert(payload).select();
  if (error) throw error;
  return data;
}

export async function updateUser(id: number, payload: IUserUpdate) {
  const { data, error } = await supabase
    .from("users")
    .update(payload)
    .eq("id", id)
    .select();
  return { data, error };
}
