<template>
  <div class="dailysongs">
    <musicPlayList msg="每日推荐"/>
  </div>
</template>

<script>
import musicPlayList from '../components/musicPlayList.vue'
export default {
  name:'DailyRecSongsView',
  components:{musicPlayList},
  setup(props) {
    
  }
}
</script>

<style lang="less" scoped>
.dailysongs{
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/dailysongs_bg.jpg');
  background-size: 100% 100%;
  overflow: scroll;
}
</style>