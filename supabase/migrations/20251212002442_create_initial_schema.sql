/*
  # Create TechHubble Database Schema

  1. New Tables
    - `projects` - Portfolio projects with descriptions and technologies
    - `services` - Service offerings
    - `contact_submissions` - Contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for read access
    - Add policy for inserting contact submissions
*/

CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  image_url TEXT,
  project_link TEXT,
  year INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
