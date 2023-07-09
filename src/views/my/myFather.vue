
<template>
  <div class="myFather">
    myFather
    <input type="text" :value="iptVal">
    <hr>
    <mySelf></mySelf>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";
import $bus from "../../bus/index";
import mySelf from "./mySelf.vue";
const iptVal = ref(10000)
onMounted(() => {
  $bus.on('addTwo', (params: any) => {
    iptVal.value += params
  })
})
provide('money', ref(2000))

//

defineExpose({
  iptVal
})
</script>
<style scoped>
.myFather {
  border: 2px solid red;
  padding: 50px 200px;
  margin: 10px;
}
</style>
