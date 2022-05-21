<template>
  <div class="iconList">
    <div v-for="(item, index) in iconList" :key="index" class="itemicon" @click="toDailyRecSong(index)">
      <img v-img-lazy="item.iconUrl" preload="1" alt="">
      <span v-if="iconList[0].name">{{item.name}}</span>
      <van-skeleton v-else :row="1" />
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {Dialog} from 'vant'
import {getBallIcon} from '../api/index'
export default {
  name: 'iconList',
  async setup(){
    let iconList = reactive([])


    const router = useRouter()
    //到每日推荐歌曲
    function toDailyRecSong(index){
      // if(index == 0){
        if(localStorage.login){
          router.push({
            name:"dailyRecSongs"
          })
        }
        else{
          Dialog.alert({
            message:"未登录"
          })
        }
      // }

    }
    let res = await getBallIcon()
    iconList.push(...res.data.data)
    return {iconList,toDailyRecSong}
  }
}
</script>

<style lang="less">
div::-webkit-scrollbar{
    display: none;
}
.iconList{
  
  width: 100vw;
  margin-top: 0.22rem;
  display: flex;
  justify-content: space-between;
  // width: 7.5rem;
  overflow: scroll;
  padding:0.1rem 0.2rem;
  .itemicon{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0.4rem;
    img {
      background-color: orangered;
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
    }
    span{
      margin-top: 0.1rem;
      font-size: 0.23rem;
      color: rgb(87, 84, 84);
    }
  }

}
</style>