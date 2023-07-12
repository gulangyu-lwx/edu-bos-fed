import axios from 'axios'
import md5 from 'js-md5'
// import router from '@/router'

const globalConfigs = {
  // 配置中心 白名单
  whiteListAPI: ['/example', 'aaa'],
  secretId: 'example_id'
}
const request = axios.create({
  baseURL: '',
  timeout: 30 * 1000,
  responseType: 'json', //
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

request.interceptors.request.use((config) => {
  // token 的配置
  const token = localStorage.getItem('token')
  if (!globalConfigs.whiteListAPI.includes(config.url as string) && token) {
    // 不在白名单，但是有token
    config.headers.token = token
  }
  // 密钥，跟后台对接这个字段可以防止通过token伪造请求
  const _secret = md5(globalConfigs.secretId + new Date().toString())
  config.headers.secret = _secret
  return config
}, err => {
  return Promise.reject(new Error(err)) // Elementui中的warning 组件
})
request.interceptors.response.use((config) => {
  // 响应状态码的统一处理
  const code = config.data.code || 200
  if (code !== 200) {
    return Promise.reject(config)
  } else {
    return Promise.resolve(config)
  }
}, err => {
  if (err && err.config) {
    const code = err.code
    switch (code) {
      case 400:
        console.log('错误请求')
        break
      case 401:
        console.log('未授权，请重新登录')
        break
      case 403:
        console.log('拒绝访问')
        break
      case 404:
        console.log('请求错误,未找到该资源')
        break
      case 405:
        console.log('请求方法未允许')
        break
      case 408:
        console.log('请求超时')
        break
      case 500:
        console.log('服务器端出错')
        break
      case 501:
        console.log('网络未实现')
        break
      case 502:
        console.log('网络错误')
        break
      case 503:
        console.log('服务不可用')
        break
      case 504:
        console.log('网络超时')
        break
      case 505:
        console.log('http版本不支持该请求')
        break
      default:
        console.log(err.message)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.resolve(err.response)
})

export default request
