export const profil = {
  nama: "Endah Ayu Inten Sari",
  peran: "Mahasiswa Informatika yang suka menjelajah tempat baru",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3
};

export function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama}, saya adalah ${peran}.`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (kategori === "selesai") return daftar.filter((proyek) => proyek.selesai);
  return daftar;
}