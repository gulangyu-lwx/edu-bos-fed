import { defineStore } from 'pinia'
import { ref } from 'vue'
// let useInfoStore = defineStore('info', {
//   state: () => {
//     return {
//       count: ref(1000)
//     }
//   },
//   actions: {
//     updateVal() {
//       console.log(this, 'this');
//       this.count++
//     }
//   },
//   getters: {}
// })
//  vue3 写法
const useInfoStore = defineStore('todo', () => {
  const count = ref(10000)
  const updateVal = () => {
    count.value += 100
  }
  return {
    count, updateVal
  }
})

export default useInfoStore
