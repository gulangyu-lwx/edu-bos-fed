// import request from '../utils/request.js'
const request = require('../utils/request.js')

console.log(request, 'requestrequest');
// 天气的接口
export const GetWeather = () => {
  return request({
    method: 'GET',
    url: '/api/weather/GetWeather',
  })
}

// 查询qq群的接口
export const GetGroupInfo = (params: number) => {
  return request({
    method: 'GET',
    data: params,
    url: `/api/qq/group_info?group=${params}`,
  })
}


// post类型的接口、文件上传等接口的不同类型的接口请求配置
// Ts语法的实际接入、学习
