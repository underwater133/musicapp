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
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
</style>