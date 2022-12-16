<template>
  <LayoutHeader></LayoutHeader>
  <div class="min-h-screen flex flex-col items-stretch overflow-x-hidden">
    <main class="flex-grow">
      <RouterView />
    </main>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import { LayoutHeader, LayoutFooter } from './components'
</script>
