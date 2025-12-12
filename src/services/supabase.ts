import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        project_type: data.projectType,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ]);

  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}
