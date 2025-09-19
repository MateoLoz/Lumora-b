import type { AvatarRow } from "./avatar.types";

export type AvatarDto = {
    avatarName: AvatarRow['avatar_name'];
    avatarUrl: AvatarRow['avatar_url'];
    genre: AvatarRow['genre'];
    id: AvatarRow['id'];
    saga: AvatarRow['saga'];
    type: AvatarRow['type'];
}