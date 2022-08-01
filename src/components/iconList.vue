<template>
  <div class="iconList">

    <div v-for="(item, index) in iconList" :key="index" class="itemicon" @click="toDailyRecSong(index)">
      <div class="img">
        <img v-img-lazy="item.iconUrl" :style="iconClass" preload="1" alt="">
      </div>
      <span v-if="iconList[0].name">{{ item.name }}</span>
      <van-skeleton v-else :row="1" />
    </div>

  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// import {Dialog} from 'vant'
import { getBallIcon } from '../api/index'
export default {
  name: 'iconList',
  async setup() {
    let iconList = reactive([])

    const router = useRouter()
    //到每日推荐歌曲
    function toDailyRecSong(index) {
      // if(index == 0){
      if (localStorage.login) {
        router.push({
          name: "dailyRecSongs"
        })
      }
      else {
        vant.Dialog.alert({
          message: "未登录"
        })
      }
      // }

    }
    let res = await getBallIcon()
    iconList.push(...res.data.data)
    let iconClass = ""
    if (!iconList.length) {
      iconClass = "position: absolute;  top: 50%;left: 50%;transform: translate(-48%, -50%);width: 55%;height: 55%;"
      const list = [
        {
          name: "每日推荐",
          iconUrl: require('../assets/iconList/rec.png')
        },
        {
          name: "私人FM",
          iconUrl: require('../assets/iconList/fm.png')
        },
        {
          name: "歌单",
          iconUrl: require('../assets/iconList/list.png')
        },
        {
          name: "排行榜",
          iconUrl: require('../assets/iconList/rank.png')
        },
        {
          name: "直播",
          iconUrl: require('../assets/iconList/live.png')
        },
        {
          name: "数字专辑",
          iconUrl: require('../assets/iconList/digit.png')
        },
      ]
      iconList.push(...list)
    }
    return { iconList, toDailyRecSong, iconClass }
  }
}
</script>

<style lang="less">
div::-webkit-scrollbar {
  display: none;
}

.iconList {

  width: 100vw;
  margin-top: 0.22rem;
  display: flex;
  justify-content: space-between;
  // width: 7.5rem;
  overflow: scroll;
  padding: 0.1rem 0.2rem;

  .itemicon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0.4rem;

    .img {
      position: relative;
      background-color: orangered;
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    span {
      margin-top: 0.1rem;
      font-size: 0.23rem;
      color: rgb(87, 84, 84);
    }
  }

}
</style>