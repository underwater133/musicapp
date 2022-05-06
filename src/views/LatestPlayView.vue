<template>
<div class="latestPlay">
  <musicPlayList msg="最近播放"/>
</div>
  
</template>

<script>
import musicPlayList from '../components/musicPlayList.vue'
export default {
  name:'latestPlayList',
  components:{musicPlayList}
}
</script>

<style lang="less">
.latestPlay{
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/mebg.jpg');
  background-size: 100% 100%;
  overflow: scroll;
}
</style>