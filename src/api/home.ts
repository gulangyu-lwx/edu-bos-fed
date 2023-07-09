import request from "../utils/request";

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
