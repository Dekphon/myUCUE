import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Vercel's Supabase integration provides these server-side names.  Map only
  // the public URL/key into Vite at build time; never expose a secret key.
  const publicUrl = env.VITE_SUPABASE_URL || env.SUPABASE_my_ucue_dbSUPABASE_URL || env["SUPABASE_my-ucue-dbSUPABASE_URL"] || env.SUPABASE_URL || "";
  const publishableKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_my_ucue_dbSUPABASE_PUBLISHABLE_KEY || env["SUPABASE_my-ucue-dbSUPABASE_PUBLISHABLE_KEY"] || env.SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_ANON_KEY || "";
  return {
    plugins: [react(), tailwindcss()],
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(publicUrl),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(publishableKey)
    }
  };
});
