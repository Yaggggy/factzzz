import { createClient } from "@supabase/supabase-js";

// Debugging to verify environment variables
console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("Supabase Key:", process.env.REACT_APP_SUPABASE_KEY);

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Ensure both variables are defined before creating the client
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Key is missing. Check your environment variables."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
