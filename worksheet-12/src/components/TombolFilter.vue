<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter">
    <button type="button" class="filter"
            :class="{ aktif: state.kategoriAktif === 'semua' }"
            @click="pilihKategori('semua')">Semua</button>
    <button type="button" class="filter"
            :class="{ aktif: state.kategoriAktif === 'selesai' }"
            @click="pilihKategori('selesai')">Selesai</button>
  </div>
  <button id="atur-ulang" @click="aturUlang">Atur ulang</button>
</template>