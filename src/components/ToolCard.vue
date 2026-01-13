<template>
  <router-link :to="`/${tool.id}`">
    <h2>{{ tool.icon }} {{ tool.title }}</h2>
    <span class="status" :class="`status-${tool.status}`">{{ displayStatus(tool.status) }}</span>
    <p>{{ tool.description }}</p>
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
</style>
