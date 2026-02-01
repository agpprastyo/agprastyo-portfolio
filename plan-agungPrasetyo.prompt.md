## Plan: Sinkronisasi data resume ke UI

TL;DR — Ambil data dari `public/agung-prasetyo_20260201_1725.json` dan perbarui tiga komponen UI (`Projects`, `About`, `Content`) supaya menampilkan informasi terbaru: nama, headline/role, kontak, ringkasan, dan detail projects. Pilihan implementasi: (A) salin JSON ke `src/data/resume.json` dan import statis, atau (B) fetch runtime dari `public/...json`. Rekomendasi: buat `src/data/resume.json` (lebih sederhana, mudah di-test). Mapping penting: `resumeData.basics` → `About`/`Content`; `resumeData.summary.content` → bio; `resumeData.sections.projects.items` → `Projects` (title, period, description, website/github).

### Steps
1. Buat `src/data/resume.json` (atau pilih runtime fetch dari `public/...json`).  
2. Update `src/components/About.jsx` pakai `resumeData.basics` dan `resume` tetap `/resume.pdf`.  
3. Update `src/components/Projects.jsx` mapping dari `resumeData.sections.projects.items`.  
4. Update `src/components/Content.jsx` gunakan `resumeData.basics.name` dan `resumeData.basics.headline`.  
5. Tambah `src/utils/stripHtml.js`, fallback aman, dan perbarui `projectsData`/`personalDetails` symbols.

### Further Considerations
1. Sumber data: Option A (`src/data/resume.json`) — cepat/offline; Option B (fetch `public/...json`) — dinamis tanpa build. Pilih satu.  
2. Ringkasan: tampilkan sebagai plain text (direkomendasikan) atau HTML rich (pakai `dangerouslySetInnerHTML`).  
3. Mau saya buat draft patch kode untuk tiap file, atau hanya langkah terperinci untuk Anda jalankan?
