import type { Database as SupabaseDatabase } from "./supabase.ts";

declare global {
  type Database = SupabaseDatabase;
}

export {};
