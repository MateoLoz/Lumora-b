import type { AvatarRow } from "./avatar.types";
import type { AvatarDto } from "./avatar.dto";

export function toAvatarDto (data : AvatarRow) : AvatarDto {
 return {
    avatarName:data.avatar_name,
    avatarUrl:data.avatar_url,
    genre: data.genre,
    id: data.id,
    saga: data.saga,
    type: data.type
 }
}

export function toAvatarDtos (data : AvatarRow[]) : AvatarDto[] {
    return data.map(toAvatarDto);
}