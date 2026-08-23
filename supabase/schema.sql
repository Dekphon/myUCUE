-- Run this once in Supabase: SQL Editor > New query.
-- This file uses Row Level Security so each member can read and change only their own data.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  results jsonb not null default '[]'::jsonb,
  personality jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  name text,
  email text,
  message text not null check (char_length(message) between 3 and 2000),
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new', 'read', 'resolved'))
);

alter table public.profiles enable row level security;
alter table public.assessments enable row level security;
alter table public.feedback enable row level security;

create policy "Members can read their profile" on public.profiles for select to authenticated using (auth.uid() = id);
create policy "Members can create their profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
create policy "Members can update their profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

create policy "Members can read their assessment" on public.assessments for select to authenticated using (auth.uid() = user_id);
create policy "Members can create their assessment" on public.assessments for insert to authenticated with check (auth.uid() = user_id);
create policy "Members can update their assessment" on public.assessments for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Members can send feedback" on public.feedback for insert to authenticated with check (auth.uid() = user_id);
create policy "Members can view their feedback" on public.feedback for select to authenticated using (auth.uid() = user_id);
