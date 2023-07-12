import request from '@/utils/request_init'
// request: 正常接口，可以重复请求
// initRequest：网速很慢时，防止pending状态去重复请求接口，比如：查询按钮
const initRequest = (function () {
  let hasRequest: string[] = []
  return function (config: any) {
    const url = config.url
    if (hasRequest.includes(url)) {
      console.log('接口已经请求，正在等待接口的响应！')
      return config
    }
    hasRequest.push(url)
    return request({
      ...config
    }).then((res) => {
      hasRequest = hasRequest.filter(item => {
        return item !== url
      })
      return res
    })
  }
})()
export {
  request,
  initRequest
}
