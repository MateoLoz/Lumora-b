import { AvatarDto } from "./avatar.dto";
import { toAvatarDtos } from "./avatar.mapper";
import { getAvatars } from "./avatar.service";

export async function getAllAvatarsService() : Promise<AvatarDto[] | null> {

const response = await getAvatars();
if(!response) return null;
return toAvatarDtos(response);
    
}