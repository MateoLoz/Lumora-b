import { supabase } from "../lib/supabaseClient";
import { AvatarRow, IAvatarInsert, IAvatarUpdate } from "./avatar.types";

export async function getAvatars () : Promise<AvatarRow[] | null> {

  const { data, error } = await supabase
  .from("templates_avatars")
  .select("*")

  if(error) {
    console.log("failed to fetch template_avatars", error);
    return null;
  }

  return data;

}

export async function postAvatars (payload : IAvatarInsert) : Promise<boolean | null> {
    const {error} = await supabase
    .from("templates_avatars").insert(payload)

    if(error) {
        console.log("error inserting a new template_avatar",error);
        return null;
    }

    return true;
}

export async function updateAvatars(payload :IAvatarUpdate) : Promise<boolean | null> {
     const {error} = await supabase
    .from("templates_avatars").update(payload).eq("id", payload.id as number);

    if(error) {
        console.log("error inserting a new template_avatar",error);
        return null;
    }

    return true;
}