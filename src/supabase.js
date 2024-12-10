import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vzkkcocbicgjaqiqaops.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6a2tjb2NiaWNnamFxaXFhb3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NTIyMjYsImV4cCI6MjA0OTMyODIyNn0.0CVpTgxHuBuD898FgSQ7mnywpsNy5GetcBqHbmt1jX0";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;