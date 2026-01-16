<template>
  <header class="home-header">
    <h1 class="home-title">Crownutils</h1>
    <p class="home-description">Outils et simulateurs pour Crownicles</p>
    <input class="home-search" type="text" v-model="search" placeholder="Effectuer une recherche" />
  </header>
  <main class="home-main">
    <section class="home-grid">
      <div v-for="tool in filteredTools" :key="tool.id" class="home-grid-item">
        <ToolCard :tool="tool" />
      </div>
    </section>
  </main>
  <footer class="home-footer">Créé par Ntalcme</footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { toolsConfig } from '@/config/tools'
import ToolCard from '@/components/ToolCard.vue'

const search = ref('')

const filteredTools = computed(() =>
  toolsConfig.filter((tool) => tool.title.toLowerCase().includes(search.value.toLowerCase())),
)
</script>

<style scoped>
.home-header {
  margin: var(--space-8) auto;
  padding: var(--space-8) var(--space-6);
  text-align: center;
}

.home-title {
  margin: 0 0 var(--space-2);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color-accent);
}

.home-description {
  margin: 0 0 var(--space-6);
  opacity: 0.85;
  color: var(--color-accent-2);
}

.home-search {
  width: min(420px, 90%);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: white;
  outline: none;
}

.home-search::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.home-search:focus {
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08);
}

.home-main {
  max-width: 50%;
  margin: 0 auto;
  padding: 0 var(--space-4) var(--space-8);
}

.home-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.home-grid-item {
  width: 100%;
}

.home-footer {
  text-align: center;
  padding: var(--space-6);
  color: var(--color-text-muted);
}

/* Responsive mobile */
@media (max-width: 768px) {
  .home-title {
    font-size: 2rem;
  }

  .home-main {
    max-width: 100%;
  }
}
</style>
