<template>
  <van-swipe-item class="swipeItem">
    <div v-for="(item, index) in showList" :key="item.id" class="music" @click="playMusic(index)">
      <div class="pic">
        <img v-img-lazy="item.al.picUrl" preload="1" alt="">
      </div>
      <div class="info">
        <span>{{ item.name }}</span>
        <span>-{{ item.ar[0].name }}</span>
        <svg v-if="isShowPlayIcon" t="1646827286172" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="8612" width="64" height="64">
          <path
            d="M233.43968 179.043792H790.559297c42.98807 0 82.202187 17.588587 110.690008 45.613874 28.29237 28.511357 45.857421 67.945485 45.857421 110.952998v352.799138c0 43.22957-17.564028 82.417081-45.857421 110.690008-28.487821 28.29237-67.700915 45.856397-110.690008 45.856398H233.43968c-42.986023 0-81.95864-17.564028-110.471021-45.856398-28.511357-28.271904-46.076408-67.459415-46.076408-110.690008V335.612711c0-43.00649 17.564028-82.440617 46.076408-110.952998 28.512381-28.02631 67.483974-45.61592 110.471021-45.615921z m565.758368 58.741869H224.792743c-25.232684 0-48.258097 10.284227-65.389267 27.438933-16.654308 16.654308-26.937512 39.680744-26.937512 64.908312v363.745444c0 25.457812 10.284227 48.483224 26.937512 65.389267 17.131169 16.905018 40.156582 27.188222 65.389267 27.188222h574.406328c25.232684 0 48.483224-10.283204 65.139579-27.188222 17.154705-16.906042 27.437909-39.931454 27.437909-65.389267v-363.744421c0-25.228591-10.283204-48.254004-27.437909-64.908312-16.657378-17.155728-39.907918-27.439956-65.140602-27.439956z"
            fill="#575454" p-id="8613"></path>
          <path
            d="M400.75843 682.377412a21.904892 21.904892 0 0 1-21.906939-21.905916V365.628328a21.904892 21.904892 0 0 1 32.859385-18.97005l255.341502 147.421584a21.903869 21.903869 0 0 1 0 37.9401L411.711899 679.441547a21.903869 21.903869 0 0 1-10.953469 2.935865z m21.905916-278.806937v218.957851l189.623755-109.479437-189.623755-109.478414z"
            fill="#575454" p-id="8614"></path>
        </svg>
      </div>
    </div>
  </van-swipe-item>
</template>

<script>
import store from '../../store/index'
export default {
  name: 'musicSwiperItem',
  props: ['showList', 'isShowPlayIcon'],
  setup(props) {
    for (let item of props.showList) {
      let name = ""
      for (let ar of item.ar) {
        name += ar.name + "、"
      }
      item.arts = name.substring(0, name.length - 1)
    }
    // 播放音乐
    function playMusic(index) {
      //将歌曲信息传到播放控制组件中
      store.commit('setPlayList', props.showList)
      store.commit('setplayListId', 1)
      store.commit('setplayCurrentIndex', index)
    }
    return {
      playMusic
    }
  }
}
</script>

<style lang="less" scoped>
.swipeItem {
  margin-top: 0.25rem;
  // margin-right: 1rem;
  .music {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.08rem;

    .pic {
      img {
        border-radius: 0.1rem;
        width: 0.95rem;
        height: 0.95rem;
        background-color: #F7F7F9;
      }
    }

    .info {
      margin-left: 0.1rem;

      span:first-child {
        font-weight: 600;
        display: inline-block;
        max-width: 3.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span:nth-child(2) {
        display: inline-block;
        padding-bottom: 0.25rem;
        vertical-align: middle;
        margin-left: 0.05rem;
        font-size: 0.2rem;
        color: rgb(87, 84, 84);

      }
    }

    svg {
      position: absolute;
      right: 0.3rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
</style>