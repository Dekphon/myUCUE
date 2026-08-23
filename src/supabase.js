import { createClient } from "@supabase/supabase-js";

// Only the project URL and the publishable/anon key belong in the browser.
// Never add a service_role key to a VITE_ environment variable.
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;

export function toAppUser(authUser) {
  if (!authUser) return null;
  return {
    id: authUser.id,
    email: authUser.email || "",
    name: authUser.user_metadata?.display_name || authUser.email?.split("@")[0] || "สมาชิก myUCUE",
    avatar: authUser.user_metadata?.avatar_url || "",
    provider: authUser.app_metadata?.provider === "google" ? "Google" : "สมาชิก myUCUE"
  };
}
