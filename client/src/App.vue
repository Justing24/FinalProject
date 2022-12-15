<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavVue from './components/Nav.vue';
import SearchAutocomplete from './components/SearchAutocomplete.vue';
</script>

<template>
  <header>

  
    <NavVue></NavVue>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
