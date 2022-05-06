<template>
  <div class="newMusic">
    <van-tabs v-model:active="activeName">
      <van-tab title="新歌" name="a">
        <van-swipe v-if="xinge.length>0" class="my-swipe" :show-indicators="false" :loop="false" :width="reaWidth">
          <musicSwiperItem :isShowPlayIcon="false" :showList="xinge.slice(0,3)"/>
          <musicSwiperItem :isShowPlayIcon="false" :showList="xinge.slice(3,6)"/>
        </van-swipe>
        <van-skeleton round v-else :row="6" style="margin:0.4rem 0;" />
      </van-tab>
      <van-tab title="新碟" name="b">
        <van-swipe class="my-swipe" :show-indicators="false" :loop="false" :width="reaWidth">
          <musicSwiperItem :isShowPlayIcon="false" :showList="xindie"/>
        </van-swipe>
      </van-tab>
      <van-tab title="数字专辑" name="c" >
        <van-swipe class="my-swipe" :show-indicators="false" :loop="false" :width="reaWidth">
          <musicSwiperItem :isShowPlayIcon="false" :showList="shuzizhuanji.slice(0,3)"/>
          <musicSwiperItem :isShowPlayIcon="false" :showList="shuzizhuanji.slice(3,6)"/>
          <musicSwiperItem :isShowPlayIcon="false" :showList="shuzizhuanji.slice(6,9)"/>
        </van-swipe>
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import {ref,reactive,onMounted} from 'vue'
import musicSwiperItem from './common/musicSwiperItem.vue'
import {getNeweastAlbum, getNewSongRec, getNewDie} from '../api/index'
export default {
  name:'newMusic',
  components:{musicSwiperItem},
  async setup() {
    const activeName = ref('a');
    let reaWidth = ref(335)
    function changeReaWidth(){
      var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
      reaWidth.value =  deviceWidth*0.9
    }

    let shuzizhuanji = reactive([])
    let xinge = reactive([])
    let xindie = reactive([])
    onMounted(async ()=>{
      changeReaWidth()
    })

    let szzj = await getNeweastAlbum()
    shuzizhuanji.push(...szzj.data.albums)
    for(let item of shuzizhuanji){
      item.ar = [{name:item.artist.name}]
      item.al = {picUrl:item.picUrl}
    }

    let xg = await getNewSongRec(12)
    xinge.push(...xg.data.result)
    for(let item of xinge){
      item.ar = item.song.artists
      item.al = {picUrl:item.picUrl}
    }

    let xd = await getNewDie(3)
    xindie.push(...xd.data.albums)
    for(let item of xindie){
      item.ar = item.artists
      item.al = {picUrl:item.picUrl}
    }

  return { activeName,reaWidth,shuzizhuanji,xinge, xindie };
  },
};
</script>

<style lang="less">
.newMusic{
  padding: 0 0.2rem;
  // margin-top: 0.5rem;
  .van-tabs__nav--line,.van-tabs__nav{
    width: 3.3rem;
    .van-tabs__line{
      display: none;
    }
    .van-tab--active{
      color: black;
    }
    .van-tab:not(:nth-child(3)){
      justify-content: start;
      .van-tab__text,.van-tab__text--ellipsis{
        white-space: nowrap;
        font-weight: 900;
        font-size: 0.32rem;
        border-right: 0.02rem solid #ccc;
        padding-right: 0.15rem;
      }
    }
    .van-tab:nth-child(3){
      justify-content: start;
      .van-tab__text,.van-tab__text--ellipsis{
        white-space: nowrap;
        font-weight: 900;
        font-size: 0.32rem;
        padding-right: 0.15rem;
      }
    }
  }

}
.my-swipe{
  .swipeItem{
  // margin-right: 1rem;
  .music{
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.08rem;
    .pic{
      img{
        width: 0.95rem;
        height: 0.95rem;
      }
    }
    .info{
      margin-left: 0.1rem;
      span:first-child{
        font-weight: 600;
      }
      span:last-child{
        margin-left: 0.05rem;
        font-size: 0.2rem;
        color: rgb(87, 84, 84);
      }
    }
  }
}   
}
</style>