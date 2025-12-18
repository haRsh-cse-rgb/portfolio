import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

let supabase: ReturnType<typeof createClient> | null = null;

try {
  if (supabaseUrl.includes('placeholder')) {
    supabase = null;
  } else {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  supabase = null;
}

export { supabase };

export interface Profile {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  location: string;
  avatar_url?: string;
}

export interface Skill {
  id: string;
  category: string;
  name: string;
  proficiency: string;
  order_index: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string[];
  technologies: string[];
  company_url?: string;
  order_index: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string;
  location: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  order_index: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  order_index: number;
}
