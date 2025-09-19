export type RefreshTokenRow = Database['public']['Tables']['refresh_tokens']['Row']
type RefresTokenInsert = Database["public"]["Tables"]["refresh_tokens"]["Insert"];
type RefresTokenUpdate = Database["public"]["Tables"]["refresh_tokens"]["Update"];

export type DbUser = {
    id:number;
    email: string;
    password: string;
    user_name: string;
}

export type DbRefreshToken = {
    id:RefreshTokenRow['id'],
    user_id : RefreshTokenRow['user_id'],
    TOKEN:RefreshTokenRow['TOKEN'],
    expire_at:RefreshTokenRow['expire_at'],
    created_at:RefreshTokenRow['created_at'],
    revoked:RefreshTokenRow['revoked'],

}

export type IRefreshTokenInsert =  RefresTokenInsert;
export type IRefreshTokenUpdate = {
    id:RefresTokenUpdate['id'],
    user_id :number,
    TOKEN:RefresTokenUpdate['TOKEN'],
    expire_at:RefresTokenUpdate['expire_at'],
    created_at:RefresTokenUpdate['created_at'],
    revoked:RefresTokenUpdate['revoked'],
};
