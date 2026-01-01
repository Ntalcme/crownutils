<script setup>
import { ref, computed } from 'vue'
import { toolsConfig } from '@/config/tools'
import ToolCard from '@/components/ToolCard.vue'
import '@/styles/HomePage.css'

const search = ref('')

const filteredTools = computed(() =>
  toolsConfig.filter(tool =>
    tool.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
  <header class="home-header">
    <h1>Crownutils</h1>
    <p>Outils et simulateurs pour Crownicles</p>
    <input type="text" v-model="search" placeholder="Effectuer une recherche">
  </header>

  <main class="home-main">
    <section class="tool-grid">
      <ToolCard v-for="tool in filteredTools" :key="tool.id" :tool="tool"/>
    </section>
  </main>
</template>

