import axios from 'axios'
import md5 from 'md5'
import router from "@/router";
// baseURL, timeout, header, responseType

const globalConfigs = {
  // 配置中心 白名单
  whiteListAPI: ['/example'],
  secretId: 'example_id'
}

const request = axios.create({
  baseURL: 'http://localhost:8080', // 模拟的后端服务
  timeout: 30 * 1000,
  responseType: 'json', //
  headers: {
    // 'Content-Type': '',
    // 'auth': 'lwx'
  }
});

request.interceptors.request.use((config) => {
  // token 的配置
  let token = localStorage.getItem('token')
  if (!globalConfigs.whiteListAPI.includes(config.url) && token) {
    // 不在白名单，但是有token
    config.headers.token = token
  }
  // 密钥
  let _secret = md5.hexMD5(globalConfigs.secretId + new Date().toString())
  config.headers.secret = _secret
  return config
}, err => {
  return Promise.reject(new Error(err)) // Elementui中的warning 组件
})
request.interceptors.response.use((config) => {
  // 响应状态码的统一处理
  const status = res.data.cod || 200
  const message = res.data.message || '未知错误'
  if (status == 401) {
    // router.push()
  }
  if (status !== 200) {
    console.log('错误码：', status, +'  ' + message);
    return Promise.reject(new Error(message))
  }
  return config
}, err => {
  return Promise.reject(new Error(err))
})

export default request
