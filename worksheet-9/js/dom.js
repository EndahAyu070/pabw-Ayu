const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");

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

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
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

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter(
    (proyek) =>
      kategori === "semua" ||
      (kategori === "selesai" && proyek.selesai)
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

render(daftarProyek);
