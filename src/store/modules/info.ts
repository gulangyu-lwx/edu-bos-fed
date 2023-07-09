import { defineStore } from "pinia";
import { ref } from "vue";
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
let useInfoStore = defineStore('todo', () => {
  let count = ref(10000)
  let updateVal = () => {
    count.value += 100
  }
  return {
    count, updateVal
  }
})

export default useInfoStore
