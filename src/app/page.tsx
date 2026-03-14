import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createClient();

  if (!supabase) {
    throw new Error('Failed to create Supabase client');
  }

  const { data, error } = await supabase.from('test').select('*');

  if (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Welkom tu kelompok 8 - Material lol
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {data && data.length > 0
            ? `Found ${data.length} items`
            : 'No items found'}
        </p>
      </div>
    </div>
  );
}
