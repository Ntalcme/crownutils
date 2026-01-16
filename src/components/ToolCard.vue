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
  background:
    radial-gradient(circle at 10% 20%, rgba(185, 94, 75, 0.08), transparent 60%),
    radial-gradient(circle at 90% 80%, rgba(210, 157, 69, 0.06), transparent 60%),
    rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(185, 94, 75, 0.15);
  color: inherit;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(185, 94, 75, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
}

.tool-card:hover {
  border-color: var(--color-accent);
  background:
    radial-gradient(circle at 10% 20%, rgba(185, 94, 75, 0.15), transparent 60%),
    radial-gradient(circle at 90% 80%, rgba(210, 157, 69, 0.12), transparent 60%),
    rgba(185, 94, 75, 0.08);
  transform: translateY(-4px);
  box-shadow:
    0 8px 24px rgba(185, 94, 75, 0.2),
    0 0 0 1px rgba(185, 94, 75, 0.3);
}

.tool-card:hover::before {
  opacity: 1;
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
  transition: color 200ms ease;
}

.tool-card:hover .tool-card-title {
  color: var(--color-accent-2);
}

.tool-card-icon {
  font-size: 1.5rem;
  line-height: 1;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
}

.tool-card:hover .tool-card-icon {
  transform: scale(1.15) rotate(5deg);
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
  transition: all 200ms ease;
}

.tool-card-status--active {
  background: var(--color-accent-2);
  color: var(--color-bg-primary);
}

.tool-card:hover .tool-card-status--active {
  background: var(--color-accent);
  box-shadow: 0 0 12px rgba(185, 94, 75, 0.4);
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
  transition: color 200ms ease;
}

.tool-card:hover .tool-card-description {
  color: var(--color-text);
}

.tool-card:focus-visible {
  outline: none;
  border-color: var(--color-accent);
  box-shadow:
    0 0 0 3px rgba(185, 94, 75, 0.3),
    0 8px 24px rgba(185, 94, 75, 0.2);
}

@media (max-width: 768px) {
  .tool-card-title {
    font-size: 1.1rem;
  }

  .tool-card-icon {
    font-size: 1rem;
  }

  .tool-card:hover {
    transform: translateY(-2px);
  }
}
</style>
