<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="2500" indicator-color="orangered" lazy-render>
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item.pic"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {onMounted, reactive} from 'vue'
import {getBanner} from '../api/index'
export default {
  name:'SwiperCom',

  setup(){
    const images = reactive([])

    onMounted(async ()=>{
      let res = await getBanner(2)
      images.push(...res.data.banners) 
    })
    
    return {images}
  }
}
</script>

<style lang="less" scoped>
.my-swipe{
  width: 95vw;
  height: 2.75rem;
  border-radius: 0.2rem;
  margin: 0 auto;
  .van-swipe-item img{
    width: 100%; 
    height: 100%;
  }
}
</style>