<template>
  <div>
    <!-- 歌单页面不缓存，以防每次点进不同歌单显示的是同一个歌单 -->
    <router-view v-slot={Component}>
      <keep-alive :exclude="['SearchView', 'MusicListView', 'MeView', 'LoginView']">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <!-- <router-view></router-view> -->
    <!-- 音乐播放控制器 -->
    <playControllor />


  </div>

</template>
<script>
import playControllor from './components/common/playControllor.vue'
export default {
  name: 'App',
  components: { playControllor },
  setup(props) {
    document.title = "云音乐"
  }
}
//当页面加载完成后触发该函数
window.onload = function () {
  // e.preventDefault()  ===    阻止默认事件

  // 当一个手指放在屏幕上时，会触发 touchstart 事件。如果另一个手指又放在了屏幕上，则会先触发 gesturestart 事件
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });

  // 在单个元素上单击两次 ===  dblclick
  document.addEventListener('dblclick', function (e) {
    e.preventDefault();
  });

  // 一个手指放在屏幕上时，会触发 touchstart 事件
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });

  // 如果一个或两个手指在屏幕上滑动，将会触发 gesturechange 事件
  // 但只要有一个手指移开， 就会触发 gestureend 事件，紧接着又会触发基于该手指的 touchend 事件
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    // 如果在300ms内触发两次touchend，就阻止默认事件
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}

body {
  overflow-x: hidden;
}
</style>