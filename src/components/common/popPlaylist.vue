<template>
  <div class="popPlaylist">
    <div class="title">
      <span>当前播放</span>
      <span>({{playlist.length}})</span>
    </div>
    <div class="listbox">
      <div class="listItem" v-for="(item,index) in playlist" :key="item.id" @click="playMusic(index)">

        <div class="left">
          <svg v-show="currentIndex == index" t="1647768647858" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2741" width="48" height="48"><path d="M499.353613 1023.998976a76.287924 76.287924 0 0 1-76.083124-76.083124V76.083124A76.287924 76.287924 0 0 1 499.353613 0 76.287924 76.287924 0 0 1 575.487937 76.083124v871.935128A76.287924 76.287924 0 0 1 499.353613 1023.998976z m346.521253 0a76.287924 76.287924 0 0 1-76.083124-76.083124v-340.889259a76.287924 76.287924 0 0 1 76.083124-76.083124 76.287924 76.287924 0 0 1 76.083124 76.083124v340.991659A76.287924 76.287924 0 0 1 845.874866 1023.998976zM152.883559 1023.998976A76.287924 76.287924 0 0 1 76.800435 947.915852V415.333985a76.287924 76.287924 0 0 1 76.083124-76.083124 76.287924 76.287924 0 0 1 76.083124 76.083124v532.684267A76.339124 76.339124 0 0 1 152.883559 1023.998976z" fill="#d41d05" p-id="2742"></path></svg>
          <span class="name" v-show="currentIndex != index">{{item.name}}<span class="arts">-{{item.arts}}</span></span>
          <span class="name" v-show="currentIndex == index" style="color:#d41d05">{{item.name}}<span class="arts">-{{item.arts}}</span></span>

        </div>

        <svg @click.stop="removeMusci(index)" t="1647694225076" class="right icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7305" width="32" height="32"><path d="M1014 60.7 966.4 13.1 514 465.4 61.7 13.1 14.1 60.7 466.4 513 14.1 965.4 61.7 1013 514 560.6 966.4 1013 1014 965.4 561.7 513Z" p-id="7306" fill="#707070"></path></svg>

      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import store from '../../store/index'
export default {
  name: 'popPlaylist',
  setup(props) {
    let playlist = computed(()=>store.state.playList)
    let currentIndex = computed(()=>store.state.playCurrentIndex)
    
    //播放音乐
    function playMusic(index){
      store.commit('setplayCurrentIndex',index)
    }

    //移出播放列表
    function removeMusci(index){
      store.commit('removeFromPlayList',index)
    }

    return{
      playlist,currentIndex,playMusic,removeMusci
    }
  }
}
</script>

<style lang="less">
.popPlaylist{
  
  padding: 0.25rem 0.2rem;
  .title{
    height: 0.32rem;
    margin-bottom: 0.2rem;
    span:first-child{
      font-size: 0.31rem;
      font-weight: 600;
    }
    span:last-child{
      font-size: 0.25rem;
      color: rgb(167, 167, 167)
    }    
  }
  .listbox{
    overflow: scroll;
    height:8rem;
    .listItem{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem 0rem;
      .left{
        display: flex;
        align-items: center;
        max-width: 6.5rem;
        .name{
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        svg{
          width: 0.28rem;
          height: 0.28rem;
          margin-right: 0.1rem;
        }
        .arts{
          font-size: 0.2rem;
          color: rgb(167, 167, 167)
        }
      }
      .right{
        width: 0.2rem;
        height: 0.2rem;
      }
    }
  }

}
</style>