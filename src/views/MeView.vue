<template>
  <div class="me">
    <div class="back" @click="router.back()">
      <svg  t="1646914191117" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="48" height="48"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2044" fill="#EF617B"></path></svg>
      <span>返回</span>
    </div>
    <div class="personInfo">
      <img :src="profile.avatarUrl" alt="" class="headPic">
      <span class="userName">{{profile.nickname}}</span>
      <div class="info">
        <span>{{profile.follows}}关注</span>
        <span>{{profile.followeds}}粉丝</span>
        <span>Lv.{{level}}</span>
      </div>
      <img src="../assets/img/YeaMiko.png" alt="" class="miko">
    </div>
    <div class="options">
      <div class="iconItem" @click="toLikeList">
        <svg t="1647419018322" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2282" width="50" height="50"><path d="M294.144 568.864a13.6 13.6 0 0 0 1.344 1.664l154.56 164.928c33.952 39.968 90.72 39.968 125.12-0.48l153.6-164.864a140.16 140.16 0 0 0 3.776-4.032l2.272-2.432a13.536 13.536 0 0 0 1.792-2.368c20.48-25.6 31.392-57.696 31.392-92.832a148.448 148.448 0 0 0-256-102.304 148.448 148.448 0 0 0-256 102.304c0 37.12 14.08 73.408 38.144 100.416zM512 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416z" p-id="2283" fill="#EF617B"></path></svg>
        <span>喜欢</span>
      </div>
      <!-- <div class="iconItem">
        <svg t="1647356414581" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="87970" width="48" height="48"><path d="M569.67 638.06c0 77.08-62.49 139.57-139.56 139.57-77.08 0-139.56-62.49-139.56-139.57 0-77.08 62.48-139.56 139.56-139.56 77.07 0 139.56 62.48 139.56 139.56z" fill="#EF617B" p-id="87971"></path><path d="M220.62 937.63c-84.49-0.13-153.32-68.96-153.44-153.44V239.82c0.09-84.52 68.92-153.35 153.43-153.45h586.3c84.51 0.09 153.35 68.93 153.44 153.44v544.37c-0.16 84.49-69.01 153.32-153.49 153.44H220.62z m0.01-795.64c-53.89 0.05-97.78 43.94-97.84 97.83v544.36c0.06 53.89 43.94 97.77 97.84 97.83h586.28c53.85-0.08 97.72-43.97 97.77-97.83V239.82c-0.06-53.86-43.92-97.75-97.78-97.83H220.63z" fill="#EF617B" p-id="87972"></path><path d="M806.86 930.75H220.62c-80.9-0.12-146.45-65.67-146.57-146.57V239.82c0.09-80.91 65.66-146.48 146.57-146.57h586.29c80.91 0.09 146.48 65.66 146.57 146.57v544.37c-0.15 80.9-65.72 146.44-146.62 146.56zM220.62 135.12c-57.8 0.06-104.64 46.9-104.7 104.7v544.37c0.06 57.8 46.9 104.64 104.7 104.7h586.29c57.77-0.09 104.59-46.92 104.65-104.7V239.82c-0.06-57.78-46.87-104.61-104.65-104.7H220.62z m0 0" fill="#EF617B" p-id="87973"></path><path d="M440.45 791.06c-101.79-0.09-184.7-82.98-184.83-184.77 0.1-101.84 83.01-184.77 184.83-184.9 101.87 0.09 184.8 83.03 184.9 184.88-0.12 101.83-83.06 184.72-184.88 184.79h-0.02z m0.01-314.06c-71.17 0.12-129.14 58.11-129.23 129.28 0.11 71.12 58.09 129.07 129.23 129.16 71.15-0.05 129.12-58 129.21-129.17-0.03-71.21-58-129.2-129.21-129.27z" fill="#EF617B" p-id="87974"></path><path d="M440.45 784.18c-98.23-0.09-177.84-79.68-177.97-177.91 0.09-98.26 79.71-177.9 177.97-178.02 98.28 0.09 177.93 79.74 178.02 178.02-0.12 98.25-79.77 177.85-178.02 177.91z m0-314.05c-75.14 0.12-136 61.02-136.09 136.15 0.12 75.1 60.99 135.94 136.09 136.04 75.11-0.06 136-60.92 136.09-136.04-0.03-75.16-60.93-136.09-136.09-136.15z m0 0" fill="#EF617B" p-id="87975"></path><path d="M597.51 602.61c-15.35 0-27.84-12.49-27.84-27.83V260.72c0-15.35 12.49-27.83 27.84-27.83s27.83 12.49 27.83 27.83v314.06c0 15.35-12.49 27.83-27.83 27.83z" fill="#EF617B" p-id="87976"></path><path d="M597.51 595.74c-11.58 0-20.96-9.39-20.96-20.96V260.72c0-11.57 9.38-20.96 20.96-20.96 11.57 0 20.96 9.39 20.96 20.96v314.06c0 11.57-9.39 20.96-20.96 20.96z m0 0" fill="#EF617B" p-id="87977"></path><path d="M765.03 456.09C657.4 456 569.76 368.36 569.67 260.73c0-15.35 12.49-27.84 27.84-27.84s27.83 12.49 27.83 27.83c0.08 76.94 62.76 139.61 139.71 139.7 15.34 0 27.83 12.49 27.83 27.83 0 15.36-12.49 27.84-27.85 27.84z" fill="#EF617B" p-id="87978"></path><path d="M765.04 449.22c-104.07-0.09-188.41-84.43-188.5-188.5 0-11.57 9.38-20.96 20.96-20.96 11.57 0 20.96 9.39 20.96 20.96 0.09 80.91 65.66 146.48 146.57 146.57 11.58 0 20.96 9.38 20.96 20.96 0.01 11.59-9.37 20.97-20.95 20.97z m0 0" fill="#EF617B" p-id="87979"></path></svg>
        <span>本地/下载</span>
      </div>
      <div class="iconItem">
        <svg t="1647514668394" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12516" width="48" height="48"><path d="M947.3 859.4l-67.1-536.9c-5.6-44.8-43.7-78.4-88.8-78.4H749c-29.3-103.1-124.1-179-236.5-179s-207.2 75.8-236.5 179h-42.4c-45.1 0-83.2 33.6-88.8 78.4L77.6 859.4c-6.7 53.4 35 100.6 88.8 100.6h692.1c53.9 0 95.5-47.2 88.8-100.6zM512.5 154.6c62.3 0 116.1 36.7 141.3 89.5H371.2c25.2-52.8 79-89.5 141.3-89.5zM747 509L504.4 777.5c-8 8.9-19.3 14.2-31.3 14.7h-1.9c-11.3 0-22.2-4.3-30.5-12L280.6 631c-18.1-16.8-19.1-45.2-2.2-63.2 16.9-18 45.2-19 63.2-2.2l126.8 118.3L680.6 449c16.6-18.4 44.9-19.8 63.2-3.2 18.4 16.6 19.8 44.9 3.2 63.2z" p-id="12517" fill="#EF617B"></path></svg>
        <span>已购</span>
      </div> -->
      <div class="iconItem" @click="toLatestPlay">
        <svg t="1647355819760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="79145" width="48" height="48"><path d="M512 68.191078c-245.204631 0-443.808922 198.60429-443.808922 443.808922s198.60429 443.808922 443.808922 443.808922 443.808922-198.60429 443.808922-443.808922S757.203608 68.191078 512 68.191078zM423.23842 711.713554 423.23842 312.285422l266.284739 199.713554L423.23842 711.713554z" p-id="79146" fill="#EF617B"></path></svg>
        <span>最近播放</span>
      </div>
    </div>

    <div class="gedan">
      <van-tabs v-model:active="active">
        <van-tab title="创建歌单">
          <mePlayList :playlist="createPlayList" msg="创建歌单" @reloadData="getMyPlayList"/>
        </van-tab>
        <van-tab title="收藏歌单">
          <mePlayList :playlist="subPlayList" msg="收藏歌单" @reloadData="getMyPlayList"/>
        </van-tab>
      </van-tabs>
    </div>
    <button @click="logOut" class="logout">退出登陆</button>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
import {useRouter} from 'vue-router'
import {logout, getUserPlayList} from '../api/index'
import mePlayList from '../components/mePlayList.vue'
import store from '../store/index'
export default {
  name:'MeView',
  components:{mePlayList},
  setup(props) {
    let active = ref(0)
    const router = useRouter()
    let userDetail = JSON.parse(localStorage.userDetail)
    let likePlayListId = ref()
    let createPlayList = reactive([])
    let subPlayList = reactive([])

    //退出登陆
    async function logOut(){
      await logout()
      // localStorage.removeItem("login")
      // localStorage.removeItem("userDetail")
      // localStorage.removeItem("cookie")
      localStorage.clear()
      store.commit('setUserData',null)
      router.replace('/')
    }
    getMyPlayList()
    // 获取歌单
    async function getMyPlayList(){
      
      let res = await getUserPlayList(userDetail.profile.userId)

      likePlayListId.value = res.data.playlist[0].id
      createPlayList.length = 0
      subPlayList.length = 0
      res.data.playlist.forEach((item,index)=>{
        if(index>0){
          // 自己创建的歌单
          if(item.creator.userId == userDetail.profile.userId){
            createPlayList.push(item)
          }
          else{
            subPlayList.push(item)
          }
        }
      })
      store.commit('setCreatePlayList',createPlayList)
    }

    //跳转到喜欢
    function toLikeList(){
      router.push({
        name: 'musicList',
        query:{
          id:likePlayListId.value,
          msg:'喜欢'
        }
      })
    }

    //跳转到最近播放
    function toLatestPlay(){
      router.push('/me/latestPlay')
    }

    return {
      active,router,logOut,...userDetail,createPlayList,subPlayList,toLikeList,
      toLatestPlay,getMyPlayList
    }
  }
}
</script>

<style lang="less">
.me{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/mebg.jpg');
  background-size: 100% 100%;
  padding:0.5rem 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  // z-index: 100;
  .back{
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.1rem 0.2rem;
    border-radius: 15px;
    svg{
      width: 0.5rem;
      height: 0.5rem;
    }
    span{
      margin-left: 0.1rem;
      color: #EF617B;
      font-size: 0.35rem;
    }
  }
  .personInfo{
    position: relative;
    margin-top: 1rem;
    height: 2rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .headPic{
      width: 1.6rem;
      height: 1.6rem;
      margin-top: -0.8rem;
      border-radius: 100%;
    }
    .userName{
      margin-top: 0.1rem;
      font-size: 0.35rem;
      font-weight: 600;
      color: rgb(70, 69, 69);
      z-index: 2;
    }
    .info{
      margin: 0.1rem 0;
      display: flex;
      justify-content: space-around;
      width: 4rem;
      font-size: 0.25rem;
      color: rgb(119, 119, 119);
    }
    .miko{
      position: absolute;
      top: 0;
      right: 0.1rem;
      width: 1.5rem;
      z-index: 1;
    }
  }
  .options{
    padding: 0.3rem 0rem;
    width: 100%;
    height: 1.8rem;
    background-color: rgba(255, 255, 255,0.8);
    border-radius: 15px;
    margin: 0.2rem;
    display: flex;
    justify-content: space-around;
    .iconItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      svg{
        width: 0.8rem;
        height: 0.8rem;
      }
      span{
        font-size: 0.28rem;
        color: rgb(119, 119, 119);
      }
    }
  }
  .gedan{
    width: 95vw;
    background-color: rgba(255, 255, 255,0.8);
    border-radius: 15px;
    
    .van-tabs{
      width: 95vw;
      border-radius: 15px;
      
      .van-tabs__wrap{
        border-radius: 15px;
        
      }
      .van-tabs__content{
        padding: 0.05rem 0.2rem;
      }
    }
  }
  .logout{
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.1rem 0.2rem;
    font-size: 0.35rem;
    width: 3rem;
    border-radius: 15px;
    color: #EF617B;
  }
}
</style>