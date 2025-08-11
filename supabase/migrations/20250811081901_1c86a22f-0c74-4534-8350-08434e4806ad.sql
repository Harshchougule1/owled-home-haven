-- Fix RLS for products to allow admins to insert/delete
-- Drop incorrect policy referencing profiles.id
DROP POLICY IF EXISTS "Admin can modify products" ON public.products;

-- Create correct admin policy using profiles.user_id
CREATE POLICY "Admins can modify products"
ON public.products
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.user_id = auth.uid()
      AND profiles.role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.user_id = auth.uid()
      AND profiles.role = 'admin'
  )
);
