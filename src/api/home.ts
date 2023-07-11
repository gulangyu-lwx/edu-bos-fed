import { initRequest, request } from './request_init'

console.log(request, 'request')
console.log(initRequest, 'initRequest')
// 天气的接口
export const GetWeather = () => {
  return request({
    method: 'GET',
    url: '/api/weather/GetWeather'
  })
}

// 查询qq群的接口
export const GetGroupInfo = (params: any) => {
  return request({
    method: 'GET',
    data: params,
    url: `/api/qq/group_info?group=${params}`
  })
}

// post类型的接口、文件上传等接口的不同类型的接口请求配置
// Ts语法的实际接入、学习
