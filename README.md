# Kelompok Inventory Material

Proyek ini dibangun menggunakan [Next.js](https://nextjs.org) yang di-bootstrap dengan [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Prasyarat

Sebelum menjalankan proyek ini, pastikan dua tools berikut sudah terinstal di komputer kamu: **Node.js** dan **pnpm**. Ikuti panduan instalasi sesuai sistem operasi masing-masing.

### Instalasi Node.js

Node.js adalah runtime JavaScript yang dibutuhkan untuk menjalankan proyek ini.

**Windows:** Unduh installer resmi dari [nodejs.org/en/download](https://nodejs.org/en/download), pilih versi **LTS**, jalankan file `.msi` yang diunduh, lalu ikuti langkah instalasinya hingga selesai.

**macOS:** Cara termudah adalah menggunakan Homebrew. Jika Homebrew belum terinstal, jalankan perintah berikut di Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Setelah Homebrew terinstal, jalankan:

```bash
brew install node
```

Alternatifnya, kamu juga bisa mengunduh installer `.pkg` langsung dari [nodejs.org/en/download](https://nodejs.org/en/download).

Untuk memverifikasi bahwa Node.js sudah terinstal dengan benar, jalankan perintah berikut di terminal:

```bash
node -v
```

### Instalasi pnpm

pnpm adalah package manager yang digunakan pada proyek ini, sebagai alternatif dari npm yang lebih cepat dan efisien.

**Windows:** Buka PowerShell sebagai Administrator, lalu jalankan:

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

**macOS:** Jalankan perintah berikut di Terminal:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Verifikasi instalasi pnpm dengan perintah:

```bash
pnpm -v
```

---

## Menjalankan Proyek

Setelah Node.js dan pnpm terinstal, ikuti langkah-langkah berikut.

**1. Clone repository ini** (jika belum):

```bash
git clone <url-repository>
cd <nama-folder-proyek>
```

**2. Install dependensi:**

```bash
pnpm install
```

**3. Jalankan development server:**

```bash
pnpm dev
```

**4. Buka browser** dan akses [http://localhost:3000](http://localhost:3000). Halaman akan otomatis diperbarui setiap kali kamu menyimpan perubahan pada kode.

--

## Format
Disini semua format sudah disesuaikan dengan standar yang ada di `.prettierrc` yang sudah disediakan, jadi pastikan untuk mengikuti aturan tersebut agar kode tetap konsisten dan mudah dibaca.

Dan pastikan sebelum commit melakukan format dengan perintah berikut:

```bash
pnpm format && pnpm lint
```

## Struktur Utama

File halaman utama berada di `app/page.tsx`. Mulailah mengedit file tersebut untuk melihat perubahan secara langsung di browser.

---

## Referensi

Jika ingin mempelajari Next.js lebih lanjut, berikut sumber yang direkomendasikan:

- [Dokumentasi Next.js](https://nextjs.org/docs) — panduan lengkap fitur dan API Next.js.
- [Tutorial Interaktif Next.js](https://nextjs.org/learn) — belajar Next.js dari dasar secara interaktif.
- [Repository GitHub Next.js](https://github.com/vercel/next.js) — kode sumber resmi Next.js.
