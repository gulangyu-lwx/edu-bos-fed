<template>
  <div class="mySelf">
    mySelf
    <input type="text" :value="iptVal">
    <button @click="changeVal($parent)">使father+10, 使son-10</button>
    <p>-{{ note }}-</p>
    <p>QQ信息：{{ qqMsg }}</p>
    <button @click="getQQ">getQQ</button>
    <hr>
    <mySonA ref="sonRef"></mySonA>
    <mySonB></mySonB>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import mySonA from './mySonA.vue'
import mySonB from './mySonB.vue'
import { GetWeather, GetGroupInfo } from '@/api/home'
const iptVal = ref(10000)
const note = ref('')
const qqMsg = ref('')
const sonRef = ref()
onMounted(async () => {
  const res = await GetWeather()
  if (res.data.code === 200) {
    note.value = res.data.result.city
  }
  console.log(res, '888')
})
const getQQ = async () => {
  const res = await GetGroupInfo(611987360)
  if (res.data.code === 200) {
    qqMsg.value = res.data.result.gName
  }
}
const changeVal = ($parent: any) => {
  sonRef.value.iptVal -= 10
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
