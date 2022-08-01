<template>
  <div class="Rec">
    <div class="recTop">
      <span>华语金曲点唱机</span>
      <!-- <span>
        <svg t="1646826316557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5360" width="16" height="16"><path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" fill="#515151" p-id="5361"></path></svg>
        播放全部  
      </span> -->
    </div>
    <highQtSongsSkeleton v-if="show" />
    <div v-else class="recSwiper">
      <van-swipe class="my-swipe" :show-indicators="false" :loop="false" lazy-render :width="reaWidth" resize>
        <musicSwiperItem :showList="recList.huayuList.slice(0,3)" :isShowPlayIcon="true"/>
        <musicSwiperItem :showList="recList.huayuList.slice(3,6)" :isShowPlayIcon="true"/>
        <musicSwiperItem :showList="recList.huayuList.slice(6,9)" :isShowPlayIcon="true"/>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import {reactive, onMounted,ref} from 'vue'
import {getHighQuality,getAlbumMusic} from '../api/index'
import musicSwiperItem from './common/musicSwiperItem.vue'
import highQtSongsSkeleton from '../skeleton/highQtSongs-skeleton.vue'
export default {
  name:'highQualitySongsRec',
  components:{musicSwiperItem, highQtSongsSkeleton},
  setup(){
    let album = reactive({
      huayu:[],
      oumei:[],
    })
    let recList = reactive({
      huayuList:[],
      oumeiList:[]
    })
    let show = ref('true')
    

    async function init(){
      changeReaWidth()
      for(let item of album.huayu){
        let res = await getAlbumMusic(item.id, 12)
        recList.huayuList.push(...res.data.songs)
        let name = ""
        for(let ar in recList.huayuList.ar){
          name += ar.name + "、"
        }
        name.slice(0,name)
      }

      for(let item of album.oumei){
        let res = await getAlbumMusic(item.id, 12)
        recList.oumeiList.push(...res.data.songs)
      }
    }
    onMounted(async ()=>{
      await getHighQuality(2, '华语').then(res=>{
        
        album.huayu.push(...res.data.playlists)
        
      })

      // await getHighQuality(2, '欧美').then(res=>{
      //   album.oumei.push(...res.data.playlists)
      // })

      await init()
      show.value = false
    })

    // let cat = '华语'
    let reaWidth = ref(335)
    function changeReaWidth(){
      var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
      reaWidth.value =  deviceWidth*0.9
    }
    return {
      recList,reaWidth,show
    }
  }
  
}
</script>

<style lang="less">
.Rec{
  padding: 0 0.2rem;
  .recTop{
      margin-top: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:first-child{
        font-size: 0.32rem;
        font-weight: 1000;
      }
      // span:last-child{
      //   color: rgb(87, 84, 84);
      //   font-size: 0.23rem;
      //   border: 0.01rem solid #ccc;
      //   border-radius: 0.2rem;
      //   padding: 0.05rem 0.1rem;

      //   svg{
      //     width: 0.23rem;
      //     height: 0.23rem;
      //     vertical-align: middle;
      //     // display: inline-block;
      //     margin-bottom: 0.03rem;
      //   }
      // }
  }
}
</style>