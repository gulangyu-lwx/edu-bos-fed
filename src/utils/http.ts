// import { request, initRequest } from './request'
// /**
//  * 封装get方法
//  */
// export function get(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, { params: params })
//       .then(response => {
//         resolve(response.data)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// /**
//  * 封装post方法
//  */
// export function post(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, data)
//       .then(response => {
//         resolve(response.data)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
