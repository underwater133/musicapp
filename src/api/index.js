import request from './request'

//获取轮播图,有多种类型
//0为pc, 1为安卓, 2为iphone, 3为iPad  默认为2
export function getBanner(type = 2) {
  return request.get(`/banner?type=${type}`)
}

//获取图标栏图标
export function getBallIcon() {
  return request.get('/homepage/dragon/ball');
}

//获取推荐歌单,默认获取六条数据(无需登陆)
export function getMusicList(num = 6) {
  return request.get(`/personalized?limit=${num}`)
}
//获取每日推荐歌单（需登陆）
export function dayRecMuiscList() {
  return request.get('/recommend/resource?cookie=' + localStorage.cookie)
}


//获取精品歌单
// 可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
// limit: 取出歌单数量 , 默认为 20
// before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
export function getHighQuality(limit, cat) {
  return request.get(`/top/playlist/highquality/tags?limit=${limit}&cat=${cat}`)
}

//获取歌单歌曲  排行榜也算歌单的一种
// 必选参数 : id : 歌单 id
// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
// 可选参数 : offset : 默认值为0
export function getAlbumMusic(id, limit) {
  return request.get(`/playlist/track/all?id=${id}&limit=${limit}`)
}

//获取云音乐首页最新专辑
export function getNeweastAlbum() {
  return request.get('/album/newest')
}

//获取新歌推荐
// limit: 取出数量 , 默认为 10 (不支持 offset)
export function getNewSongRec(limit) {
  return request.get(`/personalized/newsong?limit=${limit}`)
}

//获取网易云新碟
// 说明 : 登录后调用此接口 ,可获取全部新碟
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
export function getNewDie(limit) {
  return request.get(`/album/new?limit=${limit}`)
}

// 获取歌单详情
// 必选参数 : id : 歌单 id
// 可选参数 : s : 歌单最近的 s 个收藏者,默认为 8
// 接口地址 : /playlist/detail
export function getPlayListDetail(id) {
  return request.get(`/playlist/detail?id=${id}&cookie=` + localStorage.cookie)
}

//获取歌单所有歌曲
// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
// 可选参数 : offset : 默认值为0
export function getAllTracks(id, limit = 10, offset = 0) {
  return request.get(`/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}&cookie=` + localStorage.cookie)
}

// 获取歌词
// 必选参数 : id: 音乐 id
export function getLyric(id) {
  return request.get(`/lyric?id=${id}`)
}

// 搜索
// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
// 接口地址 : /search 或者 /cloudsearch(更全)
// 调用例子 : /search?keywords=海阔天空 /cloudsearch?keywords=海阔天空
export function search(keywords, offset, type) {
  return request.get(`/search?keywords=${keywords}&offset=${offset}&type=${type}&limit=20`)
}

// 获取歌曲详情
// 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
// 必选参数 : ids: 音乐 id, 如 ids=347230
// 接口地址 : /song/detail
// 调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231
export function getSongDetail(ids) {
  return request.get(`/song/detail?ids=${ids}`)
}

//手机登陆
// 必选参数 :
// phone: 手机号码
// password: 密码
// 可选参数 :
// countrycode: 国家码，用于国外手机号登录，例如美国传入：1
// md5_password: md5 加密后的密码,传入后 password 参数将失效
// captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效
export function loginByPhone(phone, password) {
  return request.get(`/login/cellphone?phone=${phone}&password=""&md5_password=${password}`)
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
export function loginByEmail(email, password) {
  return request.get(`/login?email=${email}&password=${password}`)
}

// 退出登陆
export function logout() {
  return request.get('/logout')
}

//获取用户详情
//需登录
//496425217
export function getUserDetail(uid) {
  return request.get(`/user/detail?uid=${uid}`)
}

// 获取喜欢音乐列表
// 说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐 id 列表(id 数组)
// 必选参数 : uid: 用户 id
// 接口地址 : /likelist
// 调用例子 : /likelist?uid=32953014
export function getLikeList(uid) {
  return request.get(`/likelist?uid=${uid}`)
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
export function getUserPlayList(uid) {
  return request.get(`/user/playlist?uid=${uid}`)
}

// 音乐是否可用
export function checkMusic(id) {
  return request.get(`/check/music?id=${id}`)
}

// 获取音乐url
export function getMusicUrl(id, br = 320000, cookie = "",) {
  return request.get(`/song/url?id=${id}&br=${br}&cookie=${cookie}`)
}

// 获取已购数字专辑
// 可选参数： limit
export function getPurchasedAlbum() {
  return request.get('/digitalAlbum/purchased?cookie=' + localStorage.cookie)
}

// 获取已购单曲
// 可选参数 : limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*10, 其中 10 为 limit 的值
export function getPurchasedSongs() {
  return request.get('/song/purchased?cookie=' + localStorage.cookie)
}

// 最近播放歌曲
// 可选参数 : limit : 返回数量 , 默认为 100
export function getLatestPlayList(limit = 50) {
  return request.get(`/record/recent/song?limit=${limit}&cookie=` + localStorage.cookie)
}

// 对歌单添加或删除歌曲
// 说明 : 调用此接口 , 可以添加歌曲到歌单或者从歌单删除某首歌曲 ( 需要登录 )
// 必选参数 :
// op: 从歌单增加单曲为 add, 删除为 del
// pid: 歌单 id tracks: 歌曲 id,可多个,用逗号隔开
// 接口地址 : /playlist/tracks
// 调用例子 : /playlist/tracks?op=add&pid=24381616&tracks=347231
export function addToMyPlayList(pid, trackId) {
  return request.get(`/playlist/tracks?op=add&pid=${pid}&tracks=${trackId}&cookie=` + localStorage.cookie)
}

export function delFromMyPlayList(pid, trackId) {
  return request.get(`/playlist/tracks?op=del&pid=${pid}&tracks=${trackId}&cookie=` + localStorage.cookie)
}

// 收藏/取消收藏歌单
// 说明 : 调用此接口 , 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
// 必选参数 :
// t : 类型,1:收藏,2:取消收藏 id : 歌单 id
// 接口地址 : /playlist/subscribe
// 调用例子 : /playlist/subscribe?t=1&id=106697785 /playlist/subscribe?t=2&id=106697785
export function subscribePlaylist(t, id) {
  return request.get(`/playlist/subscribe?t=${t}&id=${id}&cookie=` + localStorage.cookie)
}

// 获取每日推荐歌曲（需登陆）
export function getDailyRecSongs() {
  return request.get('/recommend/songs?cookie=' + localStorage.cookie)
}

//歌单评论
// 可选参数 : limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
export function playlistComments(id, limit = 20, offset = 0) {
  return request.get(`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}`)
}

// 给评论点赞
// 说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
// 必选参数 : id : 资源 id, 如歌曲 id,mv id
// cid : 评论 id
// t : 是否点赞 , 1 为点赞 ,0 为取消点赞
// type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 6: 动态
export function likeComment(id, type, cid, t) {
  return request.get(`/comment/like?id=${id}&type=${type}&cid=${cid}&t=${t}&cookie=` + localStorage.cookie )
}


//发送或删除评论
// t:1 发送, 2 回复
// type: 数字,资源类型,对应歌曲,mv,专辑,歌单,电台,视频对应以下类型
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 6: 动态
// id:对应资源 id
// content :要发送的内容
// commentId :回复的评论 id (回复评论时必填)
export function comment(id, content, t, type, commentId) {
  return request.get(`/comment?t=${t}&type=${type}&id=${id}&content=${content}&commentId=${commentId}&cookie=` + localStorage.cookie)
}


// 新版评论接口
// 说明 : 调用此接口 , 传入资源类型和资源 id,以及排序方式,可获取对应资源的评论
// 必选参数 :
// id : 资源 id, 如歌曲 id,mv id
// type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 6: 动态
// 可选参数 :
// pageNo:分页参数,第 N 页,默认为 1
// pageSize:分页参数,每页多少条数据,默认 20
// sortType: 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
// cursor: 当sortType为 3 时且页数不是第一页时需传入,值为上一条数据的 time
// 接口地址 : /comment/new
// 调用例子 : /comment/new?type=0&id=1407551413&sortType=3, /comment/new?type=0&id=1407551413&sortType=3&cursor=1602072870260&pageSize=20&pageNo=2
export function newComments(id, type, pageNo, pageSize, sortType, cursor) {
  return request.get(`/comment/new?type=${type}&id=${id}&sortType=${sortType}&cursor=${cursor}&pageSize=${pageSize}&pageNo=${pageNo}`)
}

// 楼层评论
// 说明: 调用此接口, 传入资源 parentCommentId 和资源类型 type 和资源 id 参数, 可获得该资源的歌曲楼层评论
// 必选参数:
// parentCommentId: 楼层评论 id
// id: 资源 id
// type: 数字, 资源类型, 对应歌曲, mv, 专辑, 歌单, 电台, 视频对应以下类型
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 可选参数: limit: 取出评论数量, 默认为 20
// time: 分页参数, 取上一页最后一项的 time 获取下一页数据
// 接口地址: /comment/floor
// 调用例子: /comment/floor ? parentCommentId = 1438569889 & id=29764564 & type=0
export function floorComments(parentCommentId, id, type, limit, time){
  return request.get(`/comment/floor?parentCommentId=${parentCommentId}&id=${id}&type=${type}&limit=${limit}&time=${time}`)
}