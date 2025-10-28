<script setup>

</script>

<template>
  <div class="guest-layout">
    <slot></slot>
  </div>
</template>

<style scoped>
.guest-layout {
  @apply flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8;
}
</style>