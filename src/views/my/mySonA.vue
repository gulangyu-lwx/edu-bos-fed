

<template>
  <div class="mySon">
    mySonA
    <input type="text" :value="iptVal">
    <button @click="changeVal($parent)">使father+20, 使self-20</button>
    pinia:{{ infoStore.count }}
    <button @click="changePinia">修改pinia的数据</button>
    <hr>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import $bus from "../../bus/index";
import useInfoStore from "../../store/modules/info";
const iptVal = ref(10000)
const changeVal = ($parent: any) => {
  $parent.iptVal -= 20
  $bus.emit('addTwo', 20)
}
let infoStore = useInfoStore()
const changePinia = () => {
  infoStore.updateVal()
}
defineExpose({
  iptVal
})
</script>
<style scoped>
.mySon {
  border: 2px solid red;
  padding: 50px 200px;
  margin: 10px;

}
</style>
