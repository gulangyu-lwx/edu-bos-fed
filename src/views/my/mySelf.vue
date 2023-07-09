<template>
  <div class="mySelf">
    mySelf
    <input type="text" :value="iptVal">
    <button @click="changeVal($parent)">使father+10, 使son-10</button>
    <p>-{{ note }}-</p>
    <hr>
    <mySonA ref="sonRef"></mySonA>
    <mySonB></mySonB>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import mySonA from "./mySonA.vue";
import mySonB from "./mySonB.vue";
import request from '../../services/request'

const iptVal = ref(10000)
let note = ref('')
const sonRef = ref()
onMounted(() => {
  request({
    method: 'GET',
    url: '/api/weather/GetWeather',
  }).then(res => {
    if (res.data.code == 200) {
      note.value = res.data.result.city
    }
  })
})
const changeVal = ($parent: any) => {
  sonRef.value.iptVal -= 10;
  $parent.iptVal += 10
}
defineExpose({
  iptVal
})
</script>
<style scoped>
.mySelf {
  border: 2px solid red;
  padding: 50px 200px;
  margin: 10px;
}
</style>
