<template>
  <div class="controllorWrap">
    <div class="playControllor" @click="showPlayDetail = !showPlayDetail">
      <div class="left">
        <img v-if="playIndex>=0" :style="{AnimationPlayState}" :src="playlist[playIndex].al.picUrl" alt="">
        <svg v-else t="1647057643287" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7089" width="48" height="48"><path d="M509.409598 45.864878C251.717844 45.864878 42.80517 254.769354 42.80517 512.461108c0 257.708149 208.912674 466.604428 466.604428 466.604428s466.59623-208.900377 466.59623-466.604428c0-257.695853-208.908575-466.59623-466.59623-466.59623z m0 579.946828c-62.600025 0-113.346499-50.746475-113.3465-113.350598 0-62.591827 50.742376-113.330105 113.3465-113.330104 62.595926 0 113.334203 50.742376 113.334203 113.330104 0.008197 62.595926-50.734178 113.350598-113.334203 113.350598z" fill="#A3A3B8" p-id="7090"></path><path d="M911.422014 618.749581c14.558717-44.245876 22.448788-91.508424 22.448788-140.631798 0-248.281052-201.264429-449.553678-449.565974-449.553678C236.027875 28.576401 34.75115 229.844928 34.75115 478.130079s201.276725 449.565974 449.561875 449.565974c50.611216 0 99.25094-8.390117 144.648561-23.809569l8.64014 25.490052c270.844604-85.57755 299.904656-299.912854 299.904656-299.912854l-26.084368-10.714101z m-274.697418-112.79317l-24.399787-10.017316c0 95.230078-90.397666 92.619182-90.397666 92.619182l13.521737 39.827437a128.364275 128.364275 0 0 1-26.895919 2.844524c-70.826192 0-128.253609-57.423319-128.253609-128.25361 0-13.21843 2.008382-25.957307 5.721838-37.958412l18.747628 6.36534s-2.623192-90.393567 92.610984-90.393567l-2.282997-5.55379a129.081554 129.081554 0 0 1 13.456156-0.704983c70.830291 0 128.253609 57.41922 128.25361 128.25361-0.008197 0.991895-0.049185 1.975592-0.081975 2.971585z m-121.052127 411.931362c-225.537155 0-408.390053-182.832404-408.390052-408.394151 0-46.08621 7.644146-90.385369 21.715113-131.708846l213.810666 72.572254a177.008097 177.008097 0 0 0-9.070507 55.972366c0 97.906554 79.367962 177.270417 177.270416 177.270417 14.296398 0 28.182922-1.741964 41.499722-4.93898l75.838949 223.438601a408.451534 408.451534 0 0 1-112.674307 15.788339z m171.417419-391.245032c0.766464-6.672745 1.192733-13.439762 1.192733-20.313345 0-97.902455-79.359764-177.270417-177.270417-177.270417-11.505157 0-22.743897 1.13535-33.638342 3.229806L390.488815 120.691438a408.086746 408.086746 0 0 1 125.183654-19.575573c225.545352 0 408.390053 182.836503 408.390053 408.377757a407.988376 407.988376 0 0 1-14.591507 108.456705l-222.381127-91.307586z" fill="#FFFFFF" opacity=".12" p-id="7091"></path><path d="M509.409598 605.654113c-51.385878 0-93.188906-41.807127-93.188907-93.193005 0-51.37768 41.807127-93.172511 93.188907-93.172511 51.373582 0 93.17661 41.79893 93.17661 93.172511 0.012296 51.381779-41.803028 93.193005-93.17661 93.193005z m133.495895-93.197104c0-73.605136-59.882562-133.487698-133.491797-133.487697-73.617432 0-133.504093 59.882562-133.504092 133.487697 0 73.62563 59.88666 133.508191 133.504092 133.508192 73.605136 0.004099 133.491797-59.882562 133.491797-133.508192z" fill="#6E6E96" p-id="7092"></path><path d="M390.160915 492.110874c0 17.362254 4.311872 33.716218 11.906834 48.061801a113.436672 113.436672 0 0 1-3.975776-29.744541c0-62.595926 50.746475-113.338302 113.350599-113.338302 10.29603 0 20.260062 1.39767 29.744541 3.971677a102.402869 102.402869 0 0 0-48.061801-11.906834c-56.86589 0-102.964396 46.098506-102.964397 102.956199z m121.281657-448.27897c-257.695853 0-466.604428 208.904476-466.604428 466.600329 0 257.699952 208.908575 466.59623 466.604428 466.59623 257.708149 0 466.592132-208.900377 466.592131-466.59623 0.004099-257.695853-208.896279-466.600329-466.592131-466.600329z m-18.313162 872.154055c-234.091221 0-423.870986-189.771567-423.870985-423.875085 0-234.09532 189.779765-423.862788 423.870985-423.862788s423.862788 189.771567 423.862789 423.862788c0.008197 234.103517-189.767469 423.875085-423.862789 423.875085z" fill="#9B9BB0" p-id="7093"></path><path d="M509.409598 605.461472c-51.283409 0-92.992167-41.725152-92.992167-93.000364 0-24.838352 9.668923-48.184763 27.232015-65.751954a92.410146 92.410146 0 0 1 65.760152-27.232015c51.279311 0 92.992167 41.716955 92.992166 92.992166 0.004099 51.279311-41.721054 92.992167-92.992166 92.992167z m133.692634-93.004463c0-73.711703-59.98503-133.684437-133.692634-133.684437-35.712304 0-69.289165 13.907018-94.537391 39.155244-25.248226 25.248226-39.159342 58.825087-39.159343 94.529193 0 73.719901 59.972734 133.700832 133.696734 133.700832 73.719901 0 133.692635-59.980931 133.692634-133.700832z" fill="#6E6E96" p-id="7094"></path><path d="M509.409598 25.707284C241.007841 25.707284 22.647577 244.067549 22.647577 512.461108c0 268.401756 218.360265 486.762021 486.762021 486.762021 268.38946 0 486.753824-218.356166 486.753823-486.762021 0-268.397658-218.352067-486.753824-486.753823-486.753824z m446.438637 486.749725c0 246.1743-200.272534 446.450933-446.438637 446.450934-246.1743 0-446.446834-200.276633-446.446835-446.450934 0-246.166103 200.276633-446.438637 446.446835-446.438637 246.166103 0.004099 446.438637 200.272534 446.438637 446.438637z" fill="#6E6E96" p-id="7095"></path><path d="M505.319057 506.657295m-175.372701 0a175.372701 175.372701 0 1 0 350.745402 0 175.372701 175.372701 0 1 0-350.745402 0Z" fill="#FF7A92" p-id="7096"></path><path d="M496.543659 348.892772c-81.429627 0-147.435703 66.006076-147.435703 147.435703 0 81.42143 66.006076 147.435703 147.435703 147.435703 81.429627 0 147.435703-66.006076 147.435703-147.435703s-66.006076-147.435703-147.435703-147.435703z m13.611909 282.091542c-66.854515 0-121.043929-51.60721-121.043929-115.260611 0-63.649302 54.193513-115.252413 121.043929-115.252412s121.043929 51.603111 121.043929 115.252412c0 63.6534-54.197612 115.26061-121.043929 115.260611z" fill="#FFA8B8" opacity=".74" p-id="7097"></path><path d="M759.789203 464.173876v182.762726c0 37.114072 31.949662 67.198809 71.359028 67.198808 39.401168 0 71.359028-30.084737 71.359028-67.198808v-182.762726c0-37.109973-31.95786-67.190611-71.359028-67.190611-39.409365-0.004099-71.359028 30.076539-71.359028 67.190611z" fill="#9B9BB0" p-id="7098"></path><path d="M527.206318 352.622624c60.366213 16.722851 104.694064 72.018925 104.694063 137.705299 0 78.925298-63.9813 142.914795-142.914795 142.914795-65.682276 0-120.97835-44.327851-137.697101-104.685866 7.865478 81.597675 76.609511 145.415025 160.281148 145.415025 88.946712 0 161.047612-72.117294 161.047611-161.055809 0.004099-83.679834-63.805054-152.427966-145.410926-160.293444z" fill="#E36B80" p-id="7099"></path><path d="M660.530066 506.657295c0 85.581649-69.62936 155.211009-155.215108 155.211009S350.099851 592.238944 350.099851 506.657295c0-85.585747 69.625262-155.215108 155.215107-155.215108 85.585747 0 155.215108 69.62936 155.215108 155.215108zM505.319057 311.127001c-107.813203 0-195.530294 87.712992-195.530294 195.530294 0 107.813203 87.712992 195.526195 195.530294 195.526196s195.530294-87.712992 195.530294-195.526196c-0.004099-107.817302-87.717091-195.530294-195.530294-195.530294zM811.908755 16.394952h40.98738v567.917032h-40.98738z" fill="#6E6E96" p-id="7100"></path><path d="M775.151273 428.592732v155.719252c0 31.617665 25.633507 57.255271 57.251172 57.255271s57.251172-25.637606 57.251172-57.255271v-155.719252c0-31.617665-25.633507-57.251172-57.251172-57.251172s-57.251172 25.633507-57.251172 57.251172z" fill="#F0F0FF" p-id="7101"></path><path d="M754.99368 428.592732v155.719252a76.892324 76.892324 0 0 0 22.670119 54.734547 76.896423 76.896423 0 0 0 54.734547 22.674218c42.680158 0 77.412864-34.728607 77.412864-77.412863v-155.719253c0-42.684257-34.732705-77.408765-77.412864-77.408765a76.880028 76.880028 0 0 0-54.734547 22.674219 76.908719 76.908719 0 0 0-22.670119 54.738645z m40.315186 0c0-9.90665 3.856912-19.218982 10.861656-26.227824a36.847654 36.847654 0 0 1 26.223725-10.865755c20.452702 0 37.097677 16.640876 37.097678 37.093579v155.719252c0 20.452702-16.644975 37.097677-37.097678 37.097678-9.90665 0-19.218982-3.856912-26.223725-10.861656s-10.861656-16.317076-10.861656-26.227824v-155.72745z" fill="#6E6E96" p-id="7102"></path><path d="M839.702297 370.579195c-10.562448 0-20.415814 2.910104-28.920695 7.898268 18.292668 4.615179 31.855391 21.133093 31.855392 40.864417v114.760564c0 23.305424-18.886985 42.196507-42.192409 42.196508-6.447315 0-12.538039-1.487842-18.005756-4.074146v11.328912c0 31.621763 25.633507 57.255271 57.255271 57.25527 31.613566 0 57.247073-25.633507 57.247073-57.25527v-155.723351c0.008197-31.621763-25.62531-57.251172-57.238876-57.251172z" fill="#6E6E96" opacity=".15" p-id="7103"></path></svg>
        <div class="textInfo">
          
          <span v-if="playIndex>=0">{{playlist[playIndex].name}}</span>

          <span v-else>发现好音乐</span>

          <span>横滑可以切换上下首哦</span>
          
        </div>
      </div>
      <div class="right">
        <svg v-if="isPlaying" @click.stop="play" t="1647078676020" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9539" width="48" height="48"><path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m106.666667-213.333334a21.333333 21.333333 0 0 1-21.333334-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333333 21.333333z m-213.333334 0a21.333333 21.333333 0 0 1-21.333333-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333334 21.333333z" fill="#484848" p-id="9540"></path></svg>
        <svg v-else @click.stop="play" t="1647051954435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1370" width="48" height="48"><path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z" fill="#484848" p-id="1371"></path></svg>
        <svg @click.stop="showpopList = true" t="1647051980751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1571" width="48" height="48"><path d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM405.333333 170.666667h554.666667a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667z m554.666667 341.333333H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM56.873333 252.893333a26.573333 26.573333 0 0 0 27.48-1.56l117.333334-80a26.666667 26.666667 0 0 0 0-44.066666l-117.333334-80A26.666667 26.666667 0 0 0 42.666667 69.333333v160a26.6 26.6 0 0 0 14.206666 23.56z" fill="#484848" p-id="1572"></path></svg>
      </div>

      <audio v-if="playIndex>=0" @canplay="getCurrentLyric" @ended="onEnded"
        autoplay="true" ref="audio" @error="errorMsg"
        ></audio>
    </div>
    <playMusicDetail @back="showPlayDetail = !showPlayDetail" 
    @play="play" v-if="showPlayDetail" 
    @next="nextSong" @pre="preSong" @changeMode="changeMode"
    :playmode="playmode"
    />

    <van-popup
      v-model:show="showpopList"
      round
      position="bottom"
      >
      <popPlaylist/>
    </van-popup>
  </div>
</template>

<script>
import store from '../../store/index'
import MarqueeText from 'vue-marquee-text-component'
import playMusicDetail from '../playMusicDetail.vue'
import {computed,reactive,ref,watch, provide} from 'vue'
import {getLyric,checkMusic, getMusicUrl} from '../../api/index'
import popPlaylist from './popPlaylist.vue'
// import {Dialog, Toast} from 'vant'
export default {
  name:'playControllor',
  components:{playMusicDetail,MarqueeText,popPlaylist},
  setup(props, content){
    let playIndex = computed(()=>store.state.playCurrentIndex)
    let playlist = computed(()=>store.state.playList)
    let isPlaying = computed(()=>store.state.isPlaying)
    let showPlayDetail = ref(false)
    let musicInfo = reactive({})
    // let playListId = computed(()=>store.state.playListId)
    let playSong = computed(()=>store.state.playList[store.state.playCurrentIndex])

    let audio = ref(null)
    provide('audio',audio)
    // 获取歌曲url
    async function getSongUrl(){
      
      getMusicUrl(playlist.value[playIndex.value].id, 3200000, localStorage.cookie).then(res=>{
        if(res.data.data[0].url != null){
          musicInfo.data = res.data.data[0]
          audio.value.src = musicInfo.data.url
          audio.value.play()
        }
        else{
          vant.Dialog.alert({
            message: '因合作方要求，该资源暂时无法收听',
          }).then(() => {
            nextSong()
          });
        }
      }).catch(err=>{
        console.log(err)
      })

    }

    //监视当前歌曲
    watch(playSong,()=>{
      getSongUrl()
      store.commit('setisPlaying',true)
    })

    // 播放模式
    // 0为列表循环，1为单曲循环，2为随机播放
    let playmode = ref(0)
    if(localStorage.playmode){
      playmode.value = localStorage.playmode
    }
    //修改播放模式
    function changeMode(){
      playmode.value = (playmode.value+1)%3
      localStorage.playmode = playmode.value
      switch(playmode.value){
        case 0:vant.Toast("列表循环"); break;
        case 1:vant.Toast("单曲循环"); break;
        case 2:vant.Toast("随机播放"); break;
      }
    }

    //歌曲播放完成
    function onEnded(){
      if(playmode.value == 0){
        nextSong()
      }
      else if(playmode.value == 1){
        audio.value.currentTime = 0
        audio.value.play()
      }
      else{
        store.dispatch('randomPlay',playIndex)
      }
    }

    // 切换播放暂停
    function play(){
      try{
        if(audio.value.paused){
          audio.value.play()
          // this.isPlaying = true
          store.commit('setisPlaying',true)
        }else{
          audio.value.pause()
          // this.isPlaying = false
          store.commit('setisPlaying',false)
        }
      }catch(e){
        console.log(e)
      }
    }

    // 切换上一首和下一首
    function nextSong(){
      if(playmode.value == 2){
        store.dispatch('randomPlay',playIndex)
      }
      else{
        store.dispatch('nextSong')
      }
      
    }
    function preSong(){
      
      if(playmode.value == 2){
        store.dispatch('randomPlay',playIndex)
      }
      else{
        store.dispatch('nextSong')
      }
    }

    

    //设置旋转
    let AnimationPlayState = ref("paused")
    watch(isPlaying,(newValue)=>{
      
      if(newValue){
        setTimeout(()=>{
          AnimationPlayState.value = "running"
        },500)
      }else{
        AnimationPlayState.value = "paused"
      }
    },{immediate:true})
    provide('AnimationPlayState',AnimationPlayState)

    // 获取歌词
    let lyric = reactive([])
    async function getCurrentLyric(){
      lyric.length = 0

      let res = await getLyric(playlist.value[playIndex.value].id)
      res.data.lrc.lyric.split(/\n/igs).map((item,i)=>{
        let min = item.slice(1,3)
        let sec = item.slice(item.indexOf(':')+1,item.indexOf(']'))
        
        let lrc = item.slice(item.indexOf(']')+1,item.length)
        let time = parseInt(min)*60 + parseFloat(sec)
        let nextTime = 9999
        if(i){
          lyric[i-1].nextTime = time
        }
        lyric.push({min,sec,lrc,time,nextTime})
      })
    }
    provide('lyric',lyric)

    //获取音乐错误
    async function errorMsg(){
      let res = await checkMusic(playlist.value[playIndex.value].id)
      console.log(res)
    }

    const showpopList = ref(false);

    return {
      playlist,
      playIndex,
      isPlaying,
      showPlayDetail,
      audio,
      play,
      AnimationPlayState,
      getCurrentLyric,
      nextSong,
      preSong,
      errorMsg,
      musicInfo,
      showpopList,
      changeMode,
      playmode,
      onEnded
    }
  }
}
</script>

<style lang="less" scoped>

.controllorWrap{
  height: 0.8rem;
  .playControllor{
    height: 0.8rem;
    width: 100vw;
    padding: 0.2rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top:0.01rem solid #FAFAFA;
  }
  .left, .right{
    display: flex;
    align-items: center;
  }

  .right{
    svg:nth-child(1),svg:nth-child(2){
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.3rem;
    }
    svg:last-child{
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.1rem;
    }
  }
  .left{
    svg,img{
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 1rem;
    }
    img{
      animation: disc_roate 13s linear 0.2s infinite;
    }
    .textInfo{
      display: flex;
      flex-direction: column;
      margin-left: 0.1rem;
      justify-content: space-between;
      width: 4rem;
      span:first-child{
        font-size: 0.28rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      span:last-child{
        font-size: 0.22rem;
        color: rgb(167, 167, 167);
      }
    }
  }

}
@keyframes disc_roate{
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}
</style>