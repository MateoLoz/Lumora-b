import { supabase } from "../lib/supabaseClient";
import { IMessagesInsert } from "./messages.types";
import { toMessagesDTOs } from "./messages.mapper";

export async function getMessagesByRoomId(payload: number) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("room_id", payload);
  if (error) throw error;

  return toMessagesDTOs(data || []);
}

export async function createMessage(payload: IMessagesInsert) {
  const { data, error } = await supabase
    .from("messages")
    .insert(payload)
    .select();
  if (error) throw error;
  if (data) return true;
  return false;
}
