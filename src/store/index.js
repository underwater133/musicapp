import { createStore } from 'vuex'

export default createStore({
  state: {
    playListId:"",
    playList:[],
    playCurrentIndex:-1,
    isPlaying:false,
    user:{
      data:{}
    },
    createPlayList:[],
    msg:""
  },
  getters: {
    nowSong: state =>{
      if(state.playCurrentIndex >= 0){
        return state.playList[state.playCurrentIndex]
      }
      return null
    }
  },
  mutations: {
    setPlayList(state, value){
      state.playList = []
      state.playList.push(...value)
    },
    setplayCurrentIndex(state, value){
      state.playCurrentIndex = value
      // console.log(state.playCurrentIndex)
    },
    initplayCurrentIndex(state){
      state.playCurrentIndex = -1
    },
    setplayListId(state, value){
      state.playListId = value
    },
    setisPlaying(state,value){
      state.isPlaying = value
    },
    setUserData(state,value){
      state.user.data = value
    },
    //插入到下一首
    addToNext(state,value){
      state.playList.splice(state.playCurrentIndex+1,0,value)
      //若当前没有正在播放的歌曲则开始播放
      if(state.playCurrentIndex < 0){
        state.playCurrentIndex = 0
      }
    },
    setCreatePlayList(state,value){
      state.createPlayList.push(...value)
    },

    //移出当前播放列表
    removeFromPlayList(state,index){
      if(index < state.playCurrentIndex){
        state.playCurrentIndex--
      }
      
      if(index == state.playCurrentIndex && index == state.playList.length-1 &&state.playList.length > 1){
        state.playCurrentIndex--
        // index++
      }
      state.playList.splice(index,1)

      if(state.playList.length == 0){
        state.playCurrentIndex = -1
        state.isPlaying = false
      }
    },
    setMsg(state,value){
      state.msg = value
      console.log(state.msg)
    }
  },
  actions: {
    nextSong(content){
      if(content.state.playCurrentIndex>=0){
        content.commit('setplayCurrentIndex',(content.state.playCurrentIndex+1)%(content.state.playList.length))
      }
    },
    preSong(content){
      if(content.state.playCurrentIndex>=0){
        if(content.state.playCurrentIndex == 0){
          content.commit('setplayCurrentIndex',content.state.playList.length-1)
        }
        else{
          content.commit('setplayCurrentIndex',content.state.playCurrentIndex-1)
        }
      }
    },
    randomPlay(content,index){
      let rand = Math.round(Math.random()*content.state.playList.length);
      while(rand == index.value && content.state.playList.length>1){ //若列表数量大于1，则下一首不能是同一首
        rand = Math.round(Math.random()*content.state.playList.length);
      }
      content.commit('setplayCurrentIndex',rand)
    }
  },
  modules: {
  }
})
