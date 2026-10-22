<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <p v-if="state.memuat" id="muat">Memuat data...</p>
  <p v-else-if="state.galat" id="kosong">{{ state.galat }}</p>
  <p v-else-if="tampil.length === 0" id="kosong">Belum ada data.</p>

  <ul id="daftar">
    <li v-for="proyek in tampil" :key="proyek.id" class="kartu">
      <h3>{{ proyek.judul }}</h3>
      <p>Tahun: {{ proyek.tahun }}</p>
      <p>Status: {{ proyek.selesai ? 'Selesai' : 'Belum selesai' }}</p>
      <button class="favorit" @click="tambahFavorit(proyek.id)">
        {{ state.favorit.includes(proyek.id) ? '\u2605' : '\u2606' }}
      </button>
    </li>
  </ul>
</template>