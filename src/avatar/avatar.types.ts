type AvatarRowDb = Database['public']['Tables']['templates_avatars']['Row']
type AvatarInsert = Database['public']['Tables']['templates_avatars']['Insert']
type AvatarUpdate = Database['public']['Tables']['templates_avatars']['Update']

export type AvatarRow = {
    avatar_name: AvatarRowDb['avatar_name'];
    avatar_url: AvatarRowDb['avatar_url'];
    genre: AvatarRowDb['genre'];
    id: AvatarRowDb['id'];
    saga: AvatarRowDb['saga'];
    type: AvatarRowDb['type'];
}

export type IAvatarInsert = AvatarInsert;
export type IAvatarUpdate = AvatarUpdate;