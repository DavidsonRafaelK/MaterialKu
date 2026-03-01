import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('test').select('*');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Welkom tu kelompok 8 - Material lol
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Klik Gue</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Parfait</DialogTitle>
              <DialogDescription>
                Jadi ini repo yang bakalan kita pake untuk project plsql ygy
              </DialogDescription>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    Klik Gue buat liat penjelasan detail
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                >
                  <SheetHeader>
                    <SheetTitle>Parfait</SheetTitle>
                    <SheetDescription>
                      Oke thanks jadi penjelasannya ada dibawah
                    </SheetDescription>
                  </SheetHeader>
                  <div className="no-scrollbar overflow-y-auto px-4">
                    <p className="mb-2 leading-relaxed">
                      Next.js adalah framework React untuk membangun web app.
                      Semua halaman ada di folder <code>app/</code> — setiap
                      folder jadi route, dan file <code>page.tsx</code> di
                      dalamnya jadi halaman yang tampil. Komponen yang tidak ada
                      tulisan <code>&quot; use client &quot;</code> di atas
                      adalah Server Component (jalan di server), kalau ada
                      tulisan itu berarti Client Component (jalan di browser,
                      bisa pakai state dan event). Untuk styling kita pakai
                      Tailwind CSS — langsung tulis class di elemen HTML-nya.
                      Kalau mau nambahin halaman baru, tinggal buat folder baru
                      di <code>app/</code> dan isi dengan <code>page.tsx</code>.
                      Sesimpel itu.
                    </p>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <h2 className="text-md text-zinc-900 dark:text-zinc-50">
          Koneksi ke database dengan Supabase
        </h2>
        <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
      </div>
    </div>
  );
}
