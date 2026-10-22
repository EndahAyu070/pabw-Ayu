<script setup>
import { profil } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
</script>

<template>
<div class="page">

  <KepalaProfil :profil="profil" />

  <nav aria-label="Navigasi utama">
    <div class="wadah">
      <ul>
        <li><a href="#tentang">Tentang saya</a></li>
        <li><a href="#tempat">Tempat yang pernah saya kunjungi</a></li>
        <li><a href="#galeri">Galeri</a></li>
      </ul>
    </div>
  </nav>

  <main class="wadah">
    <div class="utama">

      <section id="tentang">
        <h2>Tentang saya</h2>
        <p>Halo, saya Ayu, mahasiswa informatika yang suka menjelajah tempat baru dan mengabadikannya lewat foto. Halaman ini berisi daftar tempat yang pernah saya kunjungi.</p>
      </section>

      <section id="tempat">
        <h2>Tempat yang pernah saya kunjungi</h2>
        <p>Berikut tempat-tempat yang pernah saya kunjungi.</p>

        <div class="table-wrap">
          <table>
            <caption>Daftar tempat yang pernah saya kunjungi</caption>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Tempat</th>
                <th scope="col">Kota</th>
                <th scope="col">Waktu Berkunjung</th>
                <th scope="col">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pantai Parangtritis</td>
                <td>Yogyakarta</td>
                <td>2025</td>
                <td>Menikmati pemandangan</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gunung Sindoro</td>
                <td>Wonosobo</td>
                <td>2025</td>
                <td>Hiking dan menikmati pemandangan</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Tugu Yogyakarta</td>
                <td>Yogyakarta</td>
                <td>2025</td>
                <td>Wisata kuliner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="galeri">
        <h2>Galeri</h2>
        <p>Berikut beberapa foto dari perjalanan saya.</p>

        <div class="grid">
          <figure class="kartu galeri-kartu">
            <div class="bingkai">
              <img src="/tempat-1.jpg"
                   alt="Pantai Parangtritis saat sore hari dengan ombak besar dan langit oranye"
                   width="330" height="220" loading="lazy">
            </div>
            <figcaption>Pantai Parangtritis, Yogyakarta.</figcaption>
          </figure>
          <figure class="kartu galeri-kartu">
            <div class="bingkai">
              <img src="/tempat-2.webp" alt="Melihat sunrise dari gunung Sindoro dengan kabut tipis di sekitarnya"
                   width="330" height="220" loading="lazy">
            </div>
            <figcaption>Gunung Sindoro, Wonosobo.</figcaption>
          </figure>
          <figure class="kartu galeri-kartu">
            <div class="bingkai">
              <img src="/tempat-3.jpg" alt="Tugu Yogyakarta dari kejauhan"
                   width="330" height="220" loading="lazy">
            </div>
            <figcaption>Tugu Yogyakarta, Yogyakarta.</figcaption>
          </figure>
        </div>

        <FormKontak />
      </section>

      <section id="proyek">
        <h2>Daftar Proyek</h2>
        <TombolFilter />
        <DaftarProyek />
      </section>

    </div>
  </main>

  <footer>
    <div class="wadah">
      <p>Nama: Ayu | NIM: 25523254 | 2026</p>
    </div>
  </footer>

</div>
</template>