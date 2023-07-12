<script lang="ts" setup>
import myFather from './views/my/myFather.vue'
console.log('基础URL', process.env.VUE_APP_BASE_URL)
</script>

<template>
  <myFather></myFather>
  <router-view />
</template>

<style lang="scss" scoped></style>
