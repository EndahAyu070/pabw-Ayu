import { saring } from "./data.js";

export const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");
export const barisFilter = document.querySelector("#filter");

function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;

  const status = document.createElement("p");
  status.textContent = proyek.selesai
    ? "Status: Selesai"
    : "Status: Belum selesai";

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";

  li.append(judul, tahun, status, tombol);
  return li;
}

function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function render(state) {
  wadah.textContent = "";
  tandaiTombolAktif(state.kategoriAktif);

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  const fragmen = document.createDocumentFragment();

  tampil.forEach((proyek) => {
    fragmen.append(buatKartu(proyek, state.favorit));
  });

  wadah.append(fragmen);
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export const form = document.querySelector(".form-kolom");
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomPesan = document.querySelector("#pesan");
export const tombolKirim = form.querySelector('button[type="submit"]');

export const kolomForm = [kolomNama, kolomEmail, kolomPesan];

export function periksaKolom(kolom) {
  const wadahKolom = kolom.parentElement;
  const pesanGalat = wadahKolom.querySelector(".pesan-galat");

  let sah = kolom.value.trim() !== "";

  if (kolom === kolomEmail && sah) {
    sah = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(kolom.value.trim());
  }

  kolom.setAttribute("aria-invalid", String(!sah));
  pesanGalat.hidden = sah;

  return sah;
}

export function periksaSemuaKolom() {
  return kolomForm.map(periksaKolom).every(Boolean);
}