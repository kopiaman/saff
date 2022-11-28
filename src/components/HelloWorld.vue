<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="bg-primary">
    <h1 class="bg-primary">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>
