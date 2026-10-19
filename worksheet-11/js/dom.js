// import { daftarProyek } from "./app.js";

 const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");
export const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
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

  li.append(judul, tahun, status);
  return li;
}

export function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    return;
  }

   pesanKosong.hidden = true;

   const fragmen = document.createDocumentFragment();

   daftar.forEach((proyek) => {
     fragmen.append(buatKartu(proyek));
   });
  

  wadah.append(fragmen);
}
export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

/*export function pasangFilter(daftar) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori; 

    let terpilih;

    if (kategori === "semua") {
      terpilih = daftar;
    } else if (kategori === "selesai") {
      terpilih = daftar.filter((proyek) => proyek.selesai);
    }

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}*/
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

tombolKirim.disabled = !periksaSemuaKolom();

kolomForm.forEach((kolom) => {
  kolom.addEventListener("input", () => {
    periksaKolom(kolom);
    tombolKirim.disabled = !periksaSemuaKolom();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const sah = periksaSemuaKolom();
  tombolKirim.disabled = !sah;

  if (!sah) {
    const kolomBermasalah = kolomForm.find(
      (kolom) => kolom.getAttribute("aria-invalid") === "true"
    );

    kolomBermasalah?.focus();
  }
});
