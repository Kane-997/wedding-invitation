-- Drop old SELECT policy that requires authentication
DROP POLICY IF EXISTS "Authenticated users can view RSVPs" ON rsvp;

-- Create new policy allowing all users to view RSVPs (for admin dashboard)
CREATE POLICY "Anyone can view RSVPs"
  ON rsvp FOR SELECT
  TO anon, authenticated
  USING (true);