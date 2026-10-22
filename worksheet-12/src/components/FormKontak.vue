<script setup>
import { ref, computed } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')

const namaSah = computed(() => nama.value.trim() !== '')
const emailSah = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))
const pesanSah = computed(() => pesan.value.trim() !== '')
const semuaSah = computed(() => namaSah.value && emailSah.value && pesanSah.value)
</script>

<template>
  <form class="form-kolom" @submit.prevent>
    <h3>Tinggalkan pesan</h3>

    <div class="form-kolom">
      <label for="nama">Nama:</label>
      <input type="text" id="nama" name="nama" required
             v-model="nama" :aria-invalid="String(!namaSah)">
      <span class="pesan-galat" :hidden="namaSah">Nama wajib diisi.</span>
    </div>

    <div class="form-kolom">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required
             v-model="email" :aria-invalid="String(!emailSah)">
      <span class="pesan-galat" :hidden="emailSah">Masukkan email yang valid.</span>
    </div>

    <div class="form-kolom">
      <label for="pesan">Pesan:</label>
      <textarea id="pesan" name="pesan" required
                v-model="pesan" :aria-invalid="String(!pesanSah)"></textarea>
      <span class="pesan-galat" :hidden="pesanSah">Pesan wajib diisi.</span>
    </div>

    <button type="submit" :disabled="!semuaSah">Kirim</button>
  </form>
</template>