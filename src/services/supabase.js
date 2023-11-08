import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xnawngpdzgwpminysmqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuYXduZ3Bkemd3cG1pbnlzbXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2Njk0NzksImV4cCI6MjAxNDI0NTQ3OX0.8HuC3Dig6KijrlDYLk7BrQTO6Jg_Rp3JYTbg6wMqgX4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
