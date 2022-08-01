<template>
  <div class="musicList">
    <div class="musicListtop">
      <span>推荐歌单</span>
      <!-- <span>查看更多</span> -->
    </div>
    <musiclistSkeleton v-if="show"></musiclistSkeleton>
    <van-swipe v-else class="my-swipe" :show-indicators="false" :loop="false" :width="reaWidth">
      <van-swipe-item v-for="item in musicList" :key="item.id" class="swipeItem">
        <router-link :to="{
          name: 'musicList',
          query: { id: item.id }
        }">
          <div class="zhanwei">
            <img v-img-lazy="item.picUrl" preload="1" alt="">
          </div>
          <span class="title">{{ item.name }}</span>
          <div class="playCount">
            <svg t="1646804763613" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4541" width="48" height="48">
              <path
                d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z"
                fill="#ffffff" p-id="4542"></path>
            </svg>
            <span>{{ formatCount(item.playCount || item.playcount) }}</span>
          </div>
        </router-link>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
import { ref, reactive, onActivated } from 'vue'
import { getMusicList, dayRecMuiscList } from '../api/index'
import { formatCount } from '../util/formatPlayCount'
import musiclistSkeleton from '../skeleton/musiclist-skeleton.vue'
import store from '../store/index'
export default {
  name: 'musicList',
  components:{musiclistSkeleton},
  setup() {
    let musicList = reactive([])
    let reaWidth = ref(160)
    let show = ref(true)
    function changeReaWidth() {
      var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
      reaWidth.value = deviceWidth * 0.3
    }
    let user = JSON.stringify(store.state.user)
    const getData = async () => {
      musicList.length = 0
      if (localStorage.cookie) {
        await dayRecMuiscList().then(res => {
          musicList.push(...res.data.recommend)
        })

      }
      else {
        await getMusicList().then(res => {
          musicList.push(...res.data.result)
        })
      }
      show.value = false
    }
    changeReaWidth()


    onActivated(async () => {
      let newuser = JSON.stringify(store.state.user)
      if (user != newuser) { //说明刷新了或者重新登陆了
        await getData()
        user = newuser
      }

    })

    getData()
    return { musicList, reaWidth, formatCount, show }
  }
}

</script>

<style lang="less" scoped>
.musicList {
  padding: 0 0.2rem;
}

.musicListtop {
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 0.32rem;
    font-weight: 1000;
  }

  // span:last-child {
  //   color: rgb(87, 84, 84);
  //   font-size: 0.23rem;
  //   border: 0.01rem solid #ccc;
  //   border-radius: 0.2rem;
  //   padding: 0.05rem 0.1rem;
  // }
}

.swipeItem {
  margin-top: 0.25rem;
  max-width: 2.4rem;

  .zhanwei {
    border-radius: 0.1rem;
    width: 95%;
    height: 2.1rem;
    background-color: #ccc;

    img {
      border-radius: 0.1rem;
      width: 100%;
      height: 100%;
      background-color: #ececec;
    }
  }


  .title {
    color: rgb(87, 84, 84);
    font-size: 0.22rem;
    display: inline-block;
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 超出n行这里写n */
    -webkit-box-orient: vertical;
  }

  .playCount {
    position: absolute;
    top: 0;
    right: 0.2rem;

    .icon {
      vertical-align: middle;
      width: 0.25rem;
      height: 0.25rem;
    }

    span {
      font-size: 0.2rem;
      color: white;
    }
  }
}
</style>