<template>
  <div class="min-h-screen flex flex-col items-stretch overflow-x-hidden">
    <LayoutHeader></LayoutHeader>
    <main class="flex-grow">
      <HomePage />
    </main>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import { HomePage, LayoutHeader, LayoutFooter } from './components'
</script>
