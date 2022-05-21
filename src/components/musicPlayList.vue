<template>
  <div class="musicPlayList">

    <!-- 最近播放标题 -->
    <div class="topMes" v-show="msg=='最近播放' || msg=='每日推荐'">
      <div class="back" @click="router.back()">
        <svg t="1647519457900" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12707" width="48" height="48"><path d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z" p-id="12708" fill="#515151"></path></svg>
        <span>返回</span>
      </div>
      <span class="title">{{msg}}</span>
    </div>

    <!-- 顶部 播放全部 -->
    <div class="top">
      <div class="left">
        <svg @click="playall" t="1647521233716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13478" width="48" height="48"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="13479"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" p-id="13480"></path></svg>
        <span>播放全部</span>
        <span v-if="trackCount">(共{{trackCount}}首)</span>
      </div>
      <div class="right" v-if="!msg" @click="subGedan(1)">
        <svg t="1647521298984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13628" width="48" height="48"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="#fff" p-id="13629"></path></svg>
        <span>收藏</span>
      </div>

      <div class="right" v-if="routes.query.msg == '收藏歌单'" @click="subGedan(2)">
        <span>取消收藏</span>
      </div>
    </div>
    
    <!-- 歌单列表 -->
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad" class="musicList"
    >

      <van-swipe-cell v-for="(item, index) in playList.data.tracks" :key="index" >
        <div class="show" @click="playMusic(index)">
          <div class="left">
            <img v-if="msg=='每日推荐'" v-img-lazy="item.al.picUrl" alt="" style="width:0.7rem;height:0.7rem;border-radius:5px;">
            <svg v-else-if="playingInList && playindex==index" style="width:0.38rem; height:0.38rem;" t="1647768647858" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2741" width="48" height="48"><path d="M499.353613 1023.998976a76.287924 76.287924 0 0 1-76.083124-76.083124V76.083124A76.287924 76.287924 0 0 1 499.353613 0 76.287924 76.287924 0 0 1 575.487937 76.083124v871.935128A76.287924 76.287924 0 0 1 499.353613 1023.998976z m346.521253 0a76.287924 76.287924 0 0 1-76.083124-76.083124v-340.889259a76.287924 76.287924 0 0 1 76.083124-76.083124 76.287924 76.287924 0 0 1 76.083124 76.083124v340.991659A76.287924 76.287924 0 0 1 845.874866 1023.998976zM152.883559 1023.998976A76.287924 76.287924 0 0 1 76.800435 947.915852V415.333985a76.287924 76.287924 0 0 1 76.083124-76.083124 76.287924 76.287924 0 0 1 76.083124 76.083124v532.684267A76.339124 76.339124 0 0 1 152.883559 1023.998976z" fill="#d41d05" p-id="2742"></path></svg>
            <span v-else class="index">{{index+1}}</span>
            <div class="detail">
              <span v-if="playingInList && playindex==index" style="color:#d41d05">{{item.name}}</span>
              <span v-else>{{item.name}}</span>
              <div class="art">
                <span v-show="item.fee == 1" style="width: 0.55rem;">vip</span>
                <span v-show="item.fee == 4" style="width: 0.73rem;">付费</span>
                <span>{{item.arts}} -《{{item.al.name}}》</span>
              </div>
            </div>
          </div>
          <div class="right">
            <!-- <svg t="1647018847950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5760" width="48" height="48"><path d="M233.43968 179.043792H790.559297c42.98807 0 82.202187 17.588587 110.690008 45.613874 28.29237 28.511357 45.857421 67.945485 45.857421 110.952998v352.799138c0 43.22957-17.564028 82.417081-45.857421 110.690008-28.487821 28.29237-67.700915 45.856397-110.690008 45.856398H233.43968c-42.986023 0-81.95864-17.564028-110.471021-45.856398-28.511357-28.271904-46.076408-67.459415-46.076408-110.690008V335.612711c0-43.00649 17.564028-82.440617 46.076408-110.952998 28.512381-28.02631 67.483974-45.61592 110.471021-45.615921z m565.758368 58.741869H224.792743c-25.232684 0-48.258097 10.284227-65.389267 27.438933-16.654308 16.654308-26.937512 39.680744-26.937512 64.908312v363.745444c0 25.457812 10.284227 48.483224 26.937512 65.389267 17.131169 16.905018 40.156582 27.188222 65.389267 27.188222h574.406328c25.232684 0 48.483224-10.283204 65.139579-27.188222 17.154705-16.906042 27.437909-39.931454 27.437909-65.389267v-363.744421c0-25.228591-10.283204-48.254004-27.437909-64.908312-16.657378-17.155728-39.907918-27.439956-65.140602-27.439956z" fill="#A7A7A7" p-id="5761"></path><path d="M400.75843 682.377412a21.904892 21.904892 0 0 1-21.906939-21.905916V365.628328a21.904892 21.904892 0 0 1 32.859385-18.97005l255.341502 147.421584a21.903869 21.903869 0 0 1 0 37.9401L411.711899 679.441547a21.903869 21.903869 0 0 1-10.953469 2.935865z m21.905916-278.806937v218.957851l189.623755-109.479437-189.623755-109.478414z" fill="#A7A7A7" p-id="5762"></path></svg> -->
            <svg @click.stop="switchPopup(index)" t="1647016948783" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2087" width="48" height="48"><path d="M512 213.333333m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" p-id="2088" fill="#A7A7A7"></path><path d="M512 512m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" p-id="2089" fill="#A7A7A7"></path><path d="M512 810.666667m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" p-id="2090" fill="#A7A7A7"></path></svg>
          </div>
        </div>
        <template #right v-if="routes.query.msg == '创建歌单' || routes.query.msg == '喜欢'">
          <van-button square text="删除" type="danger" class="delete-button" @click="delFromGeDan(item.id,index)"/>
        </template>
      </van-swipe-cell>


    </van-list>

    <!-- 菜单弹窗 -->
    <van-popup
      v-if="showpopup"
      v-model:show="showpopup"
      round
      position="bottom"
    >
      <div v-show="showlevel == 0">
        <div class="songInfo">
          <img v-img-lazy="playList.data.tracks[currentIndex].al.picUrl" alt="">
          <div class="text">
            <span class="name">{{playList.data.tracks[currentIndex].name}}</span>
            <span class="arts">{{playList.data.tracks[currentIndex].arts}}</span>
          </div>
        </div>
        <div class="options">
          <div class="popitem" @click="addToNext">
            <svg t="1647671249920" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3270" width="32" height="32"><path d="M990.709696 507.455834c-17.182342 0-31.142995-12.886757-32.75384-30.069099-2.684741-32.75384-9.128119-66.044628-18.793187-97.724572-71.41411-229.813828-317.873333-362.976981-548.761058-296.932353-17.182342 4.832534-35.438581-4.832534-40.808063-22.551824-4.832534-17.719291 5.369482-35.438581 22.551825-40.808063C637.397782-56.339773 919.832534 96.690463 1001.44866 359.79508c11.275912 36.512477 18.793187 74.635799 21.477928 112.222173 1.610845 18.256239-12.349809 33.827736-30.069099 35.438581h-2.147793zM92.395362 220.725497c10.202016-13.423705 46.714493-73.024955 128.867567-131.552308C297.509573 33.867524 362.480305 23.12856 378.051803 17.759078c34.901633-12.886757 48.862286 50.473131 12.349808 64.970732-13.423705 5.369482-62.285991 11.275912-132.626204 59.60125C191.19383 187.971657 150.922715 249.7207 143.405441 261.53356c-6.443378 9.665068-66.044628-21.477928-51.010079-40.808063z m420.430438 803.274503c-218.537916 0-420.967387-140.680428-489.159807-360.29224C-22.511552 514.436161 1.114168 354.425598 88.636724 224.484134c10.202016-15.03455 30.606047-18.793187 45.640597-8.591171s18.793187 30.606047 8.591171 45.640597c-76.246644 112.759121-96.650676 252.365653-56.37956 382.844065 73.024955 235.18331 323.779763 366.735619 558.426125 293.710663 38.123322-11.81286 74.635799-28.458254 107.926587-49.936182 15.03455-9.665068 35.438581-5.369482 45.103649 10.202016 9.665068 15.03455 5.369482 35.438581-10.202016 45.103648-38.123322 24.699617-80.005281 44.029752-124.035033 57.453458-49.399234 15.571498-100.409313 23.088772-150.882444 23.088772z m0 0" p-id="3271" fill="#515151"></path><path d="M416.712073 725.993751c-5.369482 0-10.738964-1.610845-16.108446-4.295586-10.738964-5.90643-17.182342-16.645394-17.182342-28.995203V335.632411c0-11.81286 6.443378-23.088772 17.182342-28.995203 10.202016-5.90643 23.088772-5.369482 33.290788 1.073897l282.9717 178.80375c9.665068 5.90643 15.03455 16.645394 15.571498 27.921306 0 11.275912-5.90643 22.014876-15.571498 27.921306l-282.9717 178.80375c-4.832534 3.221689-10.738964 4.832534-17.182342 4.832534z m32.75384-330.76009V633.638661l188.468817-119.2025-188.468817-119.2025z m0 0M839.290304 975.674662c-6.980327 0-12.886757-3.221689-17.182342-8.591171l-94.502883-120.276396c-4.832534-6.443378-5.90643-14.497601-2.684741-22.014876 3.221689-7.517275 10.202016-12.349809 17.719291-13.423705l142.291272-14.497601c7.517275-0.536948 15.03455 2.147793 19.330135 8.054223 4.832534 5.90643 5.90643 13.960653 3.221689 20.940979L859.694336 961.177061c-2.684741 7.517275-9.128119 12.886757-17.182343 14.497601h-3.221689z m-67.655473-142.291272" p-id="3272" fill="#515151"></path></svg>
            <span>下一首播放</span> 
          </div>
          <div class="popitem" @click="selectGedan">
            <svg t="1647671694410" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30803" width="32" height="32"><path d="M876.65 944.84H160.26a75.19 75.19 0 0 1-75.11-75.11V153.34a75.19 75.19 0 0 1 75.11-75.11h716.39a75.19 75.19 0 0 1 75.11 75.11v716.39a75.19 75.19 0 0 1-75.11 75.11zM160.26 118.23a35.15 35.15 0 0 0-35.11 35.11v716.39a35.15 35.15 0 0 0 35.11 35.11h716.39a35.15 35.15 0 0 0 35.11-35.11V153.34a35.15 35.15 0 0 0-35.11-35.11z" p-id="30804" fill="#515151"></path><path d="M527.66 757.7a20 20 0 0 1-20-20V270.83a20 20 0 0 1 40 0V737.7a20 20 0 0 1-20 20z" p-id="30805" fill="#515151"></path><path d="M761.09 524.26H294.22a20 20 0 0 1 0-40h466.87a20 20 0 0 1 0 40z" p-id="30806" fill="#515151"></path></svg>
            <span>收藏到歌单</span>
          </div>
          <div class="popitem" @click="download">
            <svg t="1647671673590" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30561" width="32" height="32"><path d="M936.413091 291.712c-5.969455-12.846545-21.224727-18.397091-34.048-12.439273-12.846545 5.969455-18.408727 21.213091-12.427636 34.048 25.623273 55.109818 38.609455 114.129455 38.609455 175.406545 0 229.678545-186.868364 416.546909-416.546909 416.546909C282.309818 905.274182 95.453091 718.405818 95.453091 488.727273c0-61.265455 12.986182-120.273455 38.597818-175.383273 5.969455-12.846545 0.395636-28.090182-12.439273-34.048-12.858182-5.969455-28.090182-0.395636-34.048 12.439273C58.775273 353.664 44.183273 419.933091 44.183273 488.727273c0 257.954909 209.861818 467.816727 467.816727 467.816727S979.816727 746.682182 979.816727 488.727273C979.816727 419.921455 965.213091 353.640727 936.413091 291.712z" p-id="30562" fill="#515151"></path><path d="M500.363636 719.453091l132.817455-132.817455c9.088-9.088 9.088-23.819636 0-32.907636s-23.819636-9.088-32.907636 0L523.636364 630.365091 523.636364 174.545455c0-12.846545-10.426182-23.272727-23.272727-23.272727s-23.272727 10.426182-23.272727 23.272727l0 455.819636-76.625455-76.637091c-9.076364-9.088-23.831273-9.088-32.907636 0-9.088 9.088-9.088 23.819636 0 32.907636L500.363636 719.453091z" p-id="30563" fill="#515151"></path></svg>
            <span>下载</span>
          </div>
        </div>
      </div>

      <div v-show="showlevel == 1">
        <mePlayList msg='添加歌单' :playlist="createPlayList"
          :musicId="playList.data.tracks[currentIndex].id"
          @hidepop="showpopup=false" />
      </div>
    </van-popup>

  </div>
</template>

<script>
import {computed, reactive, ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {getLatestPlayList,getAllTracks,getMusicUrl,getUserPlayList,
          delFromMyPlayList,subscribePlaylist,getDailyRecSongs} from '../api/index'
import {formatCount} from '../util/formatPlayCount'
import {Dialog, Toast} from 'vant'
import mePlayList from '../components/mePlayList.vue'
import store from '../store/index'
export default {
  name:'musicPlayList',
  props:['msg','trackCount'],
  components:{mePlayList},
  setup(props){
    let playList = reactive({
      data:{
        tracks:[]
      }
    })
    
    const routes = useRoute()
    const router = useRouter()
    let curCount = 0, reqCount = 15, offset = 0
    //获取歌单列表
    async function getTracks(){
      if(props.msg == "最近播放"){
        getLatestPlayList().then(res=>{
          playList.data.length = res.data.data.total
          for(let item of res.data.data.list){
            let name = ""
            for(let ar of item.data.ar){
              name += ar.name+"、"
            }
            item.data.arts = name.substring(0,name.length-1)
            playList.data.tracks.push(item.data)
          }
          finished.value = true;
        }).catch(err=>{
          Dialog.alert({
            message: '未知错误',
          }).then(() => {
            // on close
          });
        })

      }
      else if(props.msg == "每日推荐"){
        getDailyRecSongs().then(res=>{
          playList.data.length = res.data.data.dailySongs.length
          playList.data.tracks.push(...res.data.data.dailySongs)
          for(let item of playList.data.tracks){
            let name = ""
            for(let ar of item.ar){
                name += ar.name+"、"
            }
            item.arts = name.substring(0,name.length-1)
          }

          loading.value = false;
          finished.value = true;
        })
      }
      else{  //根据歌单id进来的
        getAllTracks(routes.query.id, reqCount, offset).then(res=>{
          playList.data.tracks.push(...res.data.songs)
          playList.data.length = res.data.songs.length
          for(let item of playList.data.tracks){
            let name = ""
            for(let ar of item.ar){
                name += ar.name+"、"
            }
            item.arts = name.substring(0,name.length-1)
          }
          curCount += reqCount
          if(curCount + reqCount >= props.trackCount){
            reqCount = props.trackCount - curCount
          }
          offset++
          loading.value = false;
          if(curCount >= props.trackCount){
            finished.value = true;
          }
          
        }).catch(err=>{
          Dialog.alert({
            message: '未知错误',
          }).then(() => {
            // on close
          });
        })
      }
    }

    //正在播放的显示样式
    let listId = computed(()=>store.state.playListId)
    let playindex = computed(()=>store.state.playCurrentIndex)
    let nowSong = computed(()=>store.getters.nowSong)
    let playingInList = computed(()=>{
      try{
        return nowSong.value.id == playList.data.tracks[playindex.value].id && listId.value==routes.query.id
      }catch(e){
        return false
      }
    })


    const loading = ref(false);
    const finished = ref(false);
    async function onLoad(){
      getTracks()
    }


    // 播放音乐
    function playMusic(index){
      //将歌曲信息传到播放控制组件中
      // console.log(playList.data.tracks)
      store.commit('setPlayList', playList.data.tracks)
      store.commit('setplayListId',routes.query.id)
      store.commit('setplayCurrentIndex',index)
    }

    // 播放全部
    function playall(){
      store.commit('setPlayList', playList.data.tracks)
      store.commit('setplayListId',routes.query.id)
      store.commit('setplayCurrentIndex',0)
    }



    const currentIndex = ref(0)
    const showpopup = ref(false)
    const showlevel = ref(0)
    function switchPopup(index){
      currentIndex.value = index
      showpopup.value = true
      showlevel.value = 0
    }
    //添加到下一首
    function addToNext(){
      store.commit('addToNext',playList.data.tracks[currentIndex.value])
      showpopup.value = false
    }

    //收藏到歌单
    function selectGedan(){
      if(!localStorage.login){
        Dialog.alert({
          message: '未登录',
          theme: 'round-button',
        }).then(() => {
          // on close
        });
      }
      else{
        showlevel.value = 1
        getMyPlayList()
      }
    }

    //从歌单删除
    async function delFromGeDan(trackId, index){
      delFromMyPlayList(routes.query.id,trackId).then(res=>{
        //删除成功
        if(res.data.body.code == 200){
          playList.data.tracks.splice(index,1)
        }
      })
    }
    
    //下载
    const createPlayList = reactive([])
    function download(){

      getMusicUrl(playList.data.tracks[currentIndex.value].id,3200000, localStorage.cookie)
      .then(res=>{
        let alink = document.createElement('a');
        alink.style.display = 'none';
        alink.download = '文件名.mp3'; //下载后文件名
        alink.href=res.data.data[0].url
        document.body.appendChild(alink);
        alink.click();
        Toast("下载后将保存到/Download目录下")
      })
      .catch(err=>{})


      showpopup.value = false
    }

    // 获取创建歌单
    async function getMyPlayList(){
      let userDetail = JSON.parse(localStorage.userDetail)
      let res = await getUserPlayList(userDetail.profile.userId)
      res.data.playlist.forEach((item,index)=>{
        if(index == 0){
          item.name = "我喜欢的音乐"
        }
        // 自己创建的歌单和喜欢歌单
        if(item.creator.userId == userDetail.profile.userId){
          createPlayList.push(item)
        }

      })
    }

    //收藏/取消收藏歌单
    async function subGedan(t){
      if(!localStorage.login){
        Dialog.alert({
          message: '未登录',
          theme: 'round-button',
        }).then(() => {
          // on close
        });
      }
      else{
        subscribePlaylist(t,routes.query.id)
        if(t == 1){
          Toast("已收藏")
        }
        else{
          Toast("已取消收藏")
        }
      }
    }

    return {
      playList,formatCount,playMusic,router,playall,
      loading,finished,onLoad,routes,showpopup,switchPopup,currentIndex,
      addToNext,download,selectGedan,showlevel,createPlayList,
      delFromGeDan,subGedan,playingInList,playindex
    }
  }
}
</script>

<style lang="less">
.musicPlayList{
  padding: 0 0.22rem;
  width: 100vw;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-image: linear-gradient( rgba(255,255,255,0.7) 0.1rem, rgba(255,255,255,1));
  .topMes{
    padding: 0.2rem 0rem;
    display: flex;
    .back{
      display: flex;
      align-items: center;
      flex:0.2;
      svg{
        width: 0.5rem;
        height: 0.5rem;
      }
      span{
        font-size: 0.35rem;
        color: #515151;
      }
    }
    .title{
      flex: 0.6;
      text-align: center;
      font-size: 0.35rem;
    }
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .9rem;
    // border: 1px solid red;
    .left{
      display: flex;
      align-items: center;
      svg{
        fill:rgb(53, 53, 53);
        width: 0.38rem;
        height: 0.38rem;
      }
      span:nth-child(2){
        margin-left: 0.2rem;
        font-weight: 600;
        color: rgb(53, 53, 53);
      }
      span:nth-child(3){
        font-size: 0.22rem;
        color: rgb(167, 167, 167);
      }
    }
    .right{
      background-color: #FF4B3B;
      border-radius: 0.5rem;
      height: 0.7rem;
      padding: 0.18rem;
      display: flex;
      align-items: center;
      svg{
        fill: white;
        width: 0.3rem;
      }
      span{
        color: white;
        font-size: 0.24rem;
        transform: scale(0.95);
      }
    }
  }

  .musicList{
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .show{
      height:1rem; 
      display:flex; 
      justify-content:space-between; 
      align-items:center;
      .left{
        display: flex;
        align-items: center;
        .index{
          text-align: center;
          width: 0.4rem;
          color: rgb(167, 167, 167);
        }
        .detail{
          margin-left: 0.2rem;
          display: flex;
          flex-direction: column;
          width: 5rem;

          >span{
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          
          .art{
            display: flex;
            align-items: center;
            height: 0.35rem;
            

            span:not(:last-child){
              font-size: 0.2rem;
              color: #f85c6d;
              border: 1px solid #fb8995;
              transform: scale(0.8);
              text-align: center;
            }
            span:last-child{
              font-size: 0.22rem;
              color: rgb(167, 167, 167);
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
            }
          }

        }
      }
      .right{
        // display: flex;
        // position: relative;
        // justify-content: space-between;
        // width: 1.1rem;
        svg{
          fill:rgb(167, 167, 167);
          width: 0.45rem;
          height: 0.45rem;
        }

      }
    }
    .show:not(:first-child){
      margin-top: 0.3rem;
    }
  }

  .van-popup{
    padding: 0.2rem 0.2rem;
    .songInfo{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.1rem;
      img{
        border: 1px solid #ccc;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 5px;
      }
      .text{
        display: flex;
        flex-direction: column;
        margin-left: 0.1rem;
        .name{
          font-size: 0.28rem;
        }
        .arts{
          font-size: 0.22rem;
          color: rgb(167, 167, 167);
        }
      }
    }
    .options{
      .popitem{
        display: flex;
        align-items: center;
        padding: 0.15rem 0rem;
        svg{
          width: 0.4rem;
          height: 0.4rem;
        }
        span{
          font-size: 0.26rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
}
</style>