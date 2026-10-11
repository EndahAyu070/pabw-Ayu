const profil = {
  nama: "Endah Ayu Inten Sari",
  peran: "Mahasiswa Informatika yang suka menjelajah tempat baru",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 2
};

const namaLengkap = "Endah Ayu Inten Sari";
const kalimatPeran = "Mahasiswa Informatika yang suka menjelajah tempat baru";
const jumlahProyek = 2;

const teksProfil = `Nama saya ${profil.nama}, saya seorang ${profil.peran}.`;

console.log(teksProfil);
console.log(profil.keahlian);
console.log(profil.jumlahProyek);

function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama}, saya adalah ${peran}.`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Aplikasi Laporan Kejahatan Digital", tahun: 2026, selesai: true },
  { judul: "Aplikasi Manajement Katering", tahun: 2026, selesai: true },
];
console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const projekKatering = daftarProyek.find((proyek) => proyek.judul === "Aplikasi Manajement Katering");
console.log(projekKatering);
