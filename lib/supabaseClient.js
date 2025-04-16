// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);




import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uzhwqpsfxguaaxtekubg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6aHdxcHNmeGd1YWF4dGVrdWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3OTg3MDksImV4cCI6MjA2MDM3NDcwOX0.50GwQDs1vcpvnJqeA-d-nqnW2Yjie1bIiz5fcVbsvWA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


