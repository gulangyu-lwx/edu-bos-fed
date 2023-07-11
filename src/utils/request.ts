import axios from 'axios'
import md5 from 'js-md5'
// import router from '@/router'
// baseURL, timeout, header, responseType

const globalConfigs = {
  // 配置中心 白名单
  whiteListAPI: ['/example', 'aaa'],
  secretId: 'example_id'
}
const request = axios.create({
  baseURL: '',
  timeout: 30 * 1000,
  responseType: 'json', //
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

request.interceptors.request.use((config) => {
  console.log(config, 'configconfigs')
  // token 的配置
  const token = localStorage.getItem('token')
  console.log(config.url) // '/api/weather/GetWeather'
  console.log(globalConfigs.whiteListAPI) // ['/example', 'aaa']
  if (!globalConfigs.whiteListAPI.includes(config.url as string) && token) {
    // 不在白名单，但是有token
    config.headers.token = token
  }
  // 密钥
  const _secret = md5(globalConfigs.secretId + new Date().toString())
  config.headers.secret = _secret
  return config
}, err => {
  return Promise.reject(new Error(err)) // Elementui中的warning 组件
})
request.interceptors.response.use((config) => {
  // 响应状态码的统一处理
  const status = config.data.cod || 200
  const message = config.data.message || '未知错误'
  if (status === 401) {
    // router.push()
  }
  if (status !== 200) {
    console.log('错误码：', status, +'  ' + message)
    return Promise.reject(new Error(message))
  }
  return config
}, err => {
  return Promise.reject(new Error(err))
})

export default request
