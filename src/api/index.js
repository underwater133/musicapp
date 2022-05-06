import axios from 'axios'

//获取轮播图,有多种类型
//0为pc, 1为安卓, 2为iphone, 3为iPad  默认为2
const url = "http://sleeping.icu:3000"
export function getBanner(type = 2){
  return axios.get(url + `/banner?type=${type}`)
}

//获取图标栏图标
export function getBallIcon(){
  return axios.get(url + '/homepage/dragon/ball');
}

//获取推荐歌单,默认获取六条数据(无需登陆)
export function getMusicList(num = 6){
  return axios.get(url + `/personalized?limit=${num}`)
}
//获取每日推荐歌单（需登陆）
export function dayRecMuiscList(){
  return axios.get(url + '/recommend/resource?cookie=' + localStorage.cookie)
}


//获取精品歌单
// 可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
// limit: 取出歌单数量 , 默认为 20
// before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
export function getHighQuality(limit,cat){
  return axios.get(url + `/top/playlist/highquality/tags?limit=${limit}&cat=${cat}`)
}

//获取歌单歌曲  排行榜也算歌单的一种
// 必选参数 : id : 歌单 id
// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
// 可选参数 : offset : 默认值为0
export function getAlbumMusic(id, limit){
  return axios.get(url + `/playlist/track/all?id=${id}&limit=${limit}`)
}

//获取云音乐首页最新专辑
export function getNeweastAlbum(){
  return axios.get(url + '/album/newest')
}

//获取新歌推荐
// limit: 取出数量 , 默认为 10 (不支持 offset)
export function getNewSongRec(limit){
  return axios.get(url + `/personalized/newsong?limit=${limit}`)
}

//获取网易云新碟
// 说明 : 登录后调用此接口 ,可获取全部新碟
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
export function getNewDie(limit){
  return axios.get(url + `/album/new?limit=${limit}`)
}

// 获取歌单详情
// 必选参数 : id : 歌单 id
// 可选参数 : s : 歌单最近的 s 个收藏者,默认为 8
// 接口地址 : /playlist/detail
export function getPlayListDetail(id){
  return axios.get(url + `/playlist/detail?id=${id}&cookie=` + localStorage.cookie)
}

//获取歌单所有歌曲
// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
// 可选参数 : offset : 默认值为0
export function getAllTracks(id){
  return axios.get(url + `/playlist/track/all?id=${id}&cookie=` + localStorage.cookie)
}

// 获取歌词
// 必选参数 : id: 音乐 id
export function getLyric(id){
  return axios.get(url + `/lyric?id=${id}`)
}

// 搜索
// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
// 接口地址 : /search 或者 /cloudsearch(更全)
// 调用例子 : /search?keywords=海阔天空 /cloudsearch?keywords=海阔天空
export function search(keywords, offset, type){
  return axios.get(url + `/search?keywords=${keywords}&offset=${offset}&type=${type}&limit=20`)
}

// 获取歌曲详情
// 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
// 必选参数 : ids: 音乐 id, 如 ids=347230
// 接口地址 : /song/detail
// 调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231
export function getSongDetail(ids){
  return axios.get(url + `/song/detail?ids=${ids}`)
}

//手机登陆
// 必选参数 :
// phone: 手机号码
// password: 密码
// 可选参数 :
// countrycode: 国家码，用于国外手机号登录，例如美国传入：1
// md5_password: md5 加密后的密码,传入后 password 参数将失效
// captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效
export function loginByPhone(phone,password){
  return axios.get(url + `/login/cellphone?phone=${phone}&password=""&md5_password=${password}`)
}


// 邮箱登陆
// 必选参数 :
// email: 163 网易邮箱
// password: 密码
// 可选参数 :
// md5_password: md5 加密后的密码,传入后 password 将失效
// 接口地址 : /login
// 调用例子 : /login?email=xxx@163.com&password=yyy
// 完成登录后 , 会在浏览器保存一个 Cookies 用作登录凭证 , 大部分 API 都需要用到这个 Cookies,非跨域情况请求会自动带上 Cookies,跨域情况参考调用前须知
// v3.30.0 后支持手动传入 cookie,登录接口返回内容新增 cookie 字段,保存到本地后,get 请求带上?cookie=xxx (先使用 encodeURIComponent() 编码 cookie 值) 或者 post 请求 body 带上 cookie 即可,如:/user/cloud?cookie=xxx 或者
// {
//     ...,
//     cookie:"xxx"
// }
export function loginByEmail(email,password){
  return axios.get(url + `/login?email=${email}&password=${password}`)
}

// 退出登陆
export function logout(){
  return axios.get(url + '/logout') 
}

//获取用户详情
//需登录
//496425217
export function getUserDetail(uid){
  return axios.get(url + `/user/detail?uid=${uid}`)
}

// 获取喜欢音乐列表
// 说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐 id 列表(id 数组)
// 必选参数 : uid: 用户 id
// 接口地址 : /likelist
// 调用例子 : /likelist?uid=32953014
export function getLikeList(uid){
  return axios.get(url + `/likelist?uid=${uid}`)
}

// 获取用户歌单
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /user/playlist
// 调用例子 : /user/playlist?uid=32953014
// 创建者id与用户id相同的则是自己创建的，不同的则是收藏的
export function getUserPlayList(uid){
  return axios.get(url + `/user/playlist?uid=${uid}`)
}

// 音乐是否可用
export function checkMusic(id){
  return axios.get(url + `/check/music?id=${id}`)
}

// 获取音乐url
export function getMusicUrl(id,br=320000,cookie="",){
  return axios.get(url + `/song/url?id=${id}&br=${br}&cookie=${cookie}`)
}

// 获取已购数字专辑
// 可选参数： limit
export function getPurchasedAlbum(){
  return axios.get(url + '/digitalAlbum/purchased?cookie=' + localStorage.cookie)
}

// 获取已购单曲
// 可选参数 : limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*10, 其中 10 为 limit 的值
export function getPurchasedSongs(){
  return axios.get(url + '/song/purchased?cookie=' + localStorage.cookie)
}

// 最近播放歌曲
// 可选参数 : limit : 返回数量 , 默认为 100
export function getLatestPlayList(limit=50){
  return axios.get(url + `/record/recent/song?limit=${limit}&cookie=` + localStorage.cookie)
}

// 对歌单添加或删除歌曲
// 说明 : 调用此接口 , 可以添加歌曲到歌单或者从歌单删除某首歌曲 ( 需要登录 )
// 必选参数 :
// op: 从歌单增加单曲为 add, 删除为 del
// pid: 歌单 id tracks: 歌曲 id,可多个,用逗号隔开
// 接口地址 : /playlist/tracks
// 调用例子 : /playlist/tracks?op=add&pid=24381616&tracks=347231
export function addToMyPlayList(pid,trackId){
  return axios.get(url + `/playlist/tracks?op=add&pid=${pid}&tracks=${trackId}&cookie=` + localStorage.cookie)
}

export function delFromMyPlayList(pid,trackId){
  return axios.get(url + `/playlist/tracks?op=del&pid=${pid}&tracks=${trackId}&cookie=` + localStorage.cookie)
}

// 收藏/取消收藏歌单
// 说明 : 调用此接口 , 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
// 必选参数 :
// t : 类型,1:收藏,2:取消收藏 id : 歌单 id
// 接口地址 : /playlist/subscribe
// 调用例子 : /playlist/subscribe?t=1&id=106697785 /playlist/subscribe?t=2&id=106697785
export function subscribePlaylist(t, id){
  return axios.get(url + `/playlist/subscribe?t=${t}&id=${id}&cookie=` + localStorage.cookie)
}

// 获取每日推荐歌曲（需登陆）
export function getDailyRecSongs(){
  return axios.get(url + '/recommend/songs?cookie=' + localStorage.cookie)
}