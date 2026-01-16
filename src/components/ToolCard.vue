<template>
  <router-link :to="`/${tool.id}`" class="tool-card">
    <div class="tool-card-header">
      <h2 class="tool-card-title">
        {{ tool.title }}
        <span class="tool-card-icon">{{ tool.icon }}</span>
      </h2>

      <span class="tool-card-status" :class="`tool-card-status--${tool.status}`">
        {{ displayStatus(tool.status) }}
      </span>
    </div>

    <p class="tool-card-description">
      {{ tool.description }}
    </p>
  </router-link>
</template>

<script setup>
defineProps({
  tool: {
    type: Object,
    required: true,
  },
})

const statusMap = {
  active: 'Actif',
  obsolete: 'Obsolète',
}

const displayStatus = (status) => statusMap[status] || status
</script>

<style scoped>
.tool-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  height: 100%;
  padding: var(--space-6);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: inherit;
  text-decoration: none;
  transition: all 200ms ease;
}

.tool-card:hover {
  border-color: var(--color-accent);
  background: rgba(185, 94, 75, 0.05);
  transform: scale(1.02);
}

.tool-card-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.tool-card-title {
  grid-column: 2;
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.03em;
  text-align: center;
}

.tool-card-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.tool-card-status {
  grid-column: 3;
  justify-self: end;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.tool-card-status--active {
  background: var(--color-accent-2);
  color: var(--color-bg-primary);
}

.tool-card-status--obsolete {
  background: var(--color-text-muted);
  color: var(--color-bg-primary);
}

.tool-card-description {
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.tool-card:focus-visible {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(185, 94, 75, 0.2);
}

@media (max-width: 768px) {
  .tool-card-title {
    font-size: 1.1rem;
  }

  .tool-card-icon {
    font-size: 1rem;
  }
}
</style>
