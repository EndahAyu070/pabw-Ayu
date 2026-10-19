import { pilihKategori, tambahFavorit } from "./state.js";
import {
  barisFilter,
  wadah,
  form,
  tombolKirim,
  kolomForm,
  periksaKolom,
  periksaSemuaKolom
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    let terpilih;

    if (kategori === "semua") {
      terpilih = state.daftarProyek;
    } else if (kategori === "selesai") {
      terpilih = state.daftarProyek.filter((proyek) => proyek.selesai);
    }

    render(terpilih);
    tandaiTombolAktif(tombol);
  });

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
}