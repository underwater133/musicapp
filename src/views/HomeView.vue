<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
    <!-- 顶部导航栏 -->
    <topNav />

    <!-- 轮播 -->
    <SwiperCom />

    <!-- 发现图标列表 -->
    <Suspense>
      <iconList />
      <template #fallback>
        <iconSkeleton></iconSkeleton>
      </template>
    </Suspense>

    <!-- 发现好歌单 -->
    <Suspense>
      <musicList />
      <template #fallback>
        <musiclistSkeleton></musiclistSkeleton>
      </template>
    </Suspense>

    <!-- 精品歌曲推荐 -->
    <highQualitySongsRec />

    <!-- 新歌、新碟、数字专辑 -->
    <Suspense>
      <newMusic />
      <template #fallback>
        <van-skeleton title :row="3" />
      </template>
    </Suspense>



    <!-- 排行榜 -->
    <musicRank />
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '../components/topNav.vue'
import SwiperCom from '../components/SwiperCom.vue'
import iconList from '../components/iconList.vue'
import musicList from '../components/musicList.vue'
import highQualitySongsRec from '../components/highQualitySongs.vue'
import musicRank from '../components/musicRank.vue'
import newMusic from '../components/newMusic.vue'
import musiclistSkeleton from '../skeleton/musiclist-skeleton.vue'
import iconSkeleton from '../skeleton/icon-skeleton.vue'
export default {
  name: 'HomeView',
  components: {
    topNav, SwiperCom, iconList, musicList, highQualitySongsRec, musicRank, newMusic,musiclistSkeleton,iconSkeleton
  },
  setup() {
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100vw;
}
</style>
