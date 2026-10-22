<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="wadah header-baris">
      <div>
        <p class="kicker">Portofolio perjalanan</p>
        <h1>Jejak perjalanan saya</h1>
        <p>{{ props.profil.nama }} &middot; {{ props.profil.peran }}</p>
        <p>Catatan tempat yang pernah saya kunjungi, lengkap dengan lokasi dan waktu berkunjung.</p>
      </div>
      <div>
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
    </div>
  </header>
</template>