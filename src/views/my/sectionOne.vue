<template>
  <div>
    测试-father
    <sectionTwo :title="site"></sectionTwo>
  </div>
</template>

<script setup lang="ts">
import sectionTwo from './sectionTwo.vue'
import { ref } from 'vue'
const site = ref('上海')
</script>

<style scoped></style>
