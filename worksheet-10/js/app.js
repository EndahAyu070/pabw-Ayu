import { ambilProyek } from './api.js';
ambilProyek().then((daftar) => console.log(daftar));

const profil = {
  nama: "Endah Ayu Inten Sari",
  peran: "Mahasiswa Informatika yang suka menjelajah tempat baru",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 2
};
const profilSalinan = { ...profil };

console.log({ ...profil });
console.log({ profil });

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


/*export const daftarProyek = [
   { judul: "Aplikasi Laporan Kejahatan Digital", tahun: 2026, selesai: true },
   { judul: "Aplikasi Manajement Katering", tahun: 2026, selesai: true },
 ];*/
console.table(profil.keahlian);
/* console.table(daftarProyek);
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.table(judulProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const projekKatering = daftarProyek.find((proyek) => proyek.judul === "Aplikasi Manajement Katering");
console.log(projekKatering);*/

