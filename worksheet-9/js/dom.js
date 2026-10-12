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

function render(daftarProyek) {
  wadah.textContent = "";

  if (daftarProyek.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  const fragmen = document.createDocumentFragment();

  daftarProyek.forEach((proyek) => {
    fragmen.append(buatKartu(proyek));
  });

  wadah.append(fragmen);
}

render(daftarProyek);