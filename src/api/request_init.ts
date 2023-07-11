import request from '@/utils/request'
const myRequest = (function () {
  let hasRequest: string[] = []
  console.log(hasRequest, '111111')
  return function (config: any) {
    const url = config.url
    if (hasRequest.includes(url)) {
      console.log('请求已提交')
      // return Promise.reject({ reason: '请求已提交' })
      return
    } else {
      hasRequest.push(url)
    }
    console.log(hasRequest, '22222222')
    return request({
      ...config
    }).then((res) => {
      hasRequest = hasRequest.filter((item) => {
        if (item !== url) {
          return item
        }
        console.log(res, 'resssss')
        return res
      })
    })
  }
})()
console.log(myRequest, 'myRequestmyRequest')
export {
  myRequest as request,
  request as initRequest
}
