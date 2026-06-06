import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      from: () => ({ insert: async () => ({ error: new Error('Supabase not configured') }), select: async () => ({ order: async () => ({ limit: async () => ({ data: null }) }) }) }),
    } as any);

export type RSVPInsert = {
  name: string;
  email: string;
  attending: boolean;
  guests: number;
  message: string;
  location?: string;
};

export type GuestbookInsert = {
  name: string;
  message: string;
};

export type GuestbookRow = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};
