/*
  # Create Wedding Website Tables

  ## Tables Created

  ### 1. `rsvp`
  Stores guest RSVP responses for the wedding.
  - `id` (uuid, primary key)
  - `name` (text) - Guest's full name
  - `email` (text) - Guest's email
  - `attending` (boolean) - Whether they are attending
  - `guests` (integer) - Number of additional guests
  - `message` (text) - Optional message
  - `created_at` (timestamptz)

  ### 2. `guestbook`
  Stores guestbook messages from visitors.
  - `id` (uuid, primary key)
  - `name` (text) - Visitor's name
  - `message` (text) - Their message/wishes
  - `created_at` (timestamptz)

  ## Security
  - RLS enabled on both tables
  - Anyone (anon) can INSERT into both tables (public wedding website)
  - Anyone can SELECT from guestbook (public display)
  - Only authenticated users can SELECT from rsvp (admin access)
*/

CREATE TABLE IF NOT EXISTS rsvp (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  attending boolean NOT NULL DEFAULT true,
  guests integer NOT NULL DEFAULT 0,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RSVP"
  ON rsvp FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view RSVPs"
  ON rsvp FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS guestbook (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can add guestbook message"
  ON guestbook FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view guestbook messages"
  ON guestbook FOR SELECT
  TO anon, authenticated
  USING (true);
