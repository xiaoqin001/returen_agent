// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Set SUPABASE_URL and SUPABASE_ANON_KEY in your environment (e.g. via a .env file)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
