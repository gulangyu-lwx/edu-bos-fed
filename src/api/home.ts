import { initRequest, request } from '../utils/request'

// 天气的接口
export const GetWeather = () => {
  return request({
    method: 'GET',
    url: '/api/weather/GetWeather'
  })
}

// 按钮查询qq群的接口
export const GetGroupInfo = (params: any) => {
  return initRequest({
    method: 'GET',
    data: params,
    url: `/api/qq/group_info?group=${params}`
  })
}
