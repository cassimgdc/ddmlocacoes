-- Create leads table for storing contact form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  origem TEXT NOT NULL DEFAULT 'contato',
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  cidade TEXT NOT NULL,
  empresa TEXT,
  item_slug TEXT,
  periodo TEXT,
  mensagem TEXT,
  status TEXT NOT NULL DEFAULT 'novo'
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (public - anyone can submit a lead)
CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Create policy for selecting leads (only authenticated users can read - for future admin)
CREATE POLICY "Authenticated users can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

-- Create index for better query performance
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_status ON public.leads(status);