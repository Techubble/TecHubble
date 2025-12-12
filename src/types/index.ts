export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ai-ml' | 'computer-vision' | 'robotics' | 'web-mobile' | 'trading' | 'games' | 'misc';
  technologies: string[];
  image?: string;
  link?: string;
  year?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  created_at?: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
  github?: string;
}
