<template>
  <div class="tool-card">
    <h2>{{ tool.icon }} {{ tool.title }}</h2>
    <span>{{ displayStatus(tool.status) }}</span>
    <p>{{ tool.description }}</p>
  </div>
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
