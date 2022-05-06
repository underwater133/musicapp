<template>
  <div class="listView">
    <!-- 顶部tab栏和背景图片 -->
    <musicListTop :topInfo="Info.topInfo"/>

    <!-- 音乐列表 -->
    <musicPlayList v-if="Info.topInfo.data" :trackCount="Info.topInfo.data.trackCount" :msg="routes.query.msg"/>
  </div>
</template>

<script> 
import {useRoute} from 'vue-router'
import musicListTop from '../components/musicListTop.vue'
import musicPlayList from '../components/musicPlayList.vue'
import {getPlayListDetail} from '../api/index'
import {reactive} from 'vue'
export default {
  name:'MusicListView',
  components:{musicListTop,musicPlayList},
  setup(){
    let routes = useRoute()
    let Info = reactive({
      topInfo:{},
      songsInfo:{}
    })
    async function getPlayList(){
      let res = await getPlayListDetail(routes.query.id)
      let {id, name, coverImgUrl, description, shareCount, commentCount, playCount,trackCount} = res.data.playlist
      Info.topInfo.data = {id, name, coverImgUrl, description, shareCount, commentCount, playCount,trackCount}

      Info.topInfo.data.auname = res.data.playlist.creator.nickname
      Info.topInfo.data.id = res.data.playlist.creator.userId
      Info.topInfo.data.auhead = res.data.playlist.creator.avatarUrl
    }
    getPlayList()
    

    return {Info,routes}
  }
}
</script>

<style scoped>
.listView{
  width: 100%
  
}
</style>