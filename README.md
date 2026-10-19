# pabw-Ayu
## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama #9A3412 (Terracotta Tua), dipilih karena memberikan kesan hangat, natural, dan elegan
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #9A3412 | tombol, tautan, penanda |
| --color-fg | #1C1917 | warna teks utama |
| --color-bg | #FFF7ED | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 - Flexbox and Grid
### Penggunaan AI
Saya menggunakan AI sebagai alat bantu untuk memahami materi Flexbox dan Grid, mencari solusi ketika mengalami kesulitan dalam penulisan kode, serta membantu mengecek dan memperbaiki kode. Hasil dari AI kemudian saya sesuaikan dengan kebutuhan tugas dan saya uji kembali secara mandiri.

## pertemuan 8 
Dalam pengerjaan tugas ini, saya menggunakan AI sebagai alat bantu untuk memahami materi JavaScript ES6+, terutama dalam memahami penggunaan map(), filter(), dan find(), serta membantu mencari dan memahami penyebab error pada kode. AI juga membantu memberikan penjelasan ketika saya mengalami kesulitan dalam memahami soal dan kode.
Kode, data profil, data proyek, dan isi halaman saya sesuaikan dan kerjakan sendiri. Saya juga melakukan pengujian kode, memperbaiki error, dan memastikan hasilnya berjalan sesuai dengan tugas yang diberikan.

## Pertemuan 9
### Deklarasi Penggunaan AI

Saya menggunakan AI untuk membantu mencari dan memperbaiki error pada kode yang saya kerjakan. AI membantu menjelaskan penyebab error dan memberikan saran perbaikan agar kode dapat berjalan dengan baik. Setelah itu, saya mencoba memperbaiki kode di VS Code dan mengecek hasilnya melalui browser. Saya juga menggunakan AI untuk memahami bagian kode yang belum saya pahami. Untuk hasil akhirnya, saya tetap memeriksa dan memastikan sendiri apakah kode sudah berjalan sesuai dengan yang diharapkan.

## pertemuan 10
## Penggunaan AI

Saya menggunakan AI sebagai bantuan dalam memahami materi dan memperbaiki beberapa bagian kode yang belum saya pahami. AI membantu saya memahami `fetch()`, `async/await`, `try/catch`, JSON, serta hubungan antara `api.js`, `app.js`, dan `dom.js`.

Saya tetap menjalankan dan memeriksa kode sendiri di VS Code dan browser. Kode yang digunakan saya sesuaikan dengan proyek saya, sedangkan data dan isi halaman merupakan hasil pekerjaan saya sendiri. 

# PABW Pertemuan 11
## Struktur Modul
Proyek menggunakan beberapa modul JavaScript dengan tugas yang berbeda:

- `data.js` : menyimpan data profil dan fungsi pengolahan data.
- `state.js` : mengelola state aplikasi dan localStorage.
- `dom.js` : mengatur tampilan dan manipulasi DOM.
- `events.js` : menangani interaksi pengguna.
- `app.js` : menghubungkan seluruh modul dan menjalankan aplikasi.
- `api.js` : mengambil data proyek dari sumber data JSON.

## Fitur
- Menampilkan daftar proyek.
- Filter proyek berdasarkan status selesai.
- Menambahkan proyek ke favorit.
- Menyimpan kategori dan favorit menggunakan localStorage.
- Memulihkan pilihan pengguna setelah halaman dimuat ulang.
- Tombol Atur Ulang untuk menghapus pilihan yang tersimpan.
- Menangani data localStorage yang rusak atau memiliki versi yang tidak sesuai.
- Menampilkan pesan ketika data proyek gagal dimuat.

## Penyimpanan Data
Data yang disimpan di localStorage hanya berupa pilihan pengguna, yaitu:

- Kategori yang sedang dipilih.
- Daftar proyek favorit.
- Versi penyimpanan.

Data proyek dari server tidak disimpan di localStorage.

## Penggunaan AI
Dalam pengerjaan proyek ini, AI digunakan sebagai alat bantu untuk memahami materi dan membantu proses pengembangan kode.

Bagian yang dibantu AI antara lain:
- Memahami pembagian tanggung jawab setiap modul JavaScript.
- Membantu mengecek dan memperbaiki error pada kode.
- Membantu memahami penggunaan `localStorage`, `JSON.stringify()`, dan `JSON.parse()`.
- Membantu mengecek alur state, event, dan render.
- Membantu menyusun beberapa bagian dokumentasi README.

Kode yang diberikan AI tidak langsung digunakan tanpa pemeriksaan. Setiap perubahan kode diperiksa kembali dengan menjalankan website, melihat hasil pada browser, dan mengecek Console untuk memastikan tidak terdapat error.

## Hasil Pengujian
Beberapa pengujian yang dilakukan:

- Filter `Semua` dan `Selesai` dapat digunakan.
- Proyek dapat ditambahkan ke favorit.
- Pilihan kategori dan favorit tetap tersimpan setelah halaman dimuat ulang.
- Data localStorage yang rusak dapat ditangani.
- Data localStorage dengan versi yang tidak sesuai dapat dihapus.
- Tombol Atur Ulang dapat mengembalikan state ke nilai awal.