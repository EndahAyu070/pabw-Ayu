import {
  pilihKategori,
  tambahFavorit,
  aturUlang
} from "./state.js";

import {
  barisFilter,
  wadah,
  tombolAturUlang,
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

    if (kategori) {
      pilihKategori(kategori);
    }
  });

  wadah.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");

    if (!tombol) return;

    tambahFavorit(Number(tombol.dataset.id));
  });

  tombolAturUlang.addEventListener("click", aturUlang);

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
        (kolom) =>
          kolom.getAttribute("aria-invalid") === "true"
      );

      kolomBermasalah?.focus();
    }
  });
}