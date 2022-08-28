import axios from 'axios'

//创建实例
const instance = axios.create({
  baseURL:"http://120.25.198.16:3000",
  timeout: 15000
})

//请求拦截器
instance.interceptors.request.use(config =>{
  //vercel部署的服务器应该在请求尾部加上realIP
  if(config.url.indexOf('?') !== -1){
    config.url += "&"
  }
  else config.url += "?"
  config.url += "realIP=116.25.146.177"
  return config
}, err =>{
  return Promise.reject(err)
})

export default instance