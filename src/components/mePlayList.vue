<template>
  <div class="mePlayList">
    <span class="title">{{msg}}({{playlist.length}}个)</span>
    <img src="" alt="">
    <van-pull-refresh v-model="loading" @refresh="onRefresh" class="playlist">
      <div class="listItem" v-for="item in playlist" :key="item.id" @click="toMusicList(item.id)">
        <img :src="item.coverImgUrl" alt="">
        <div class="content">
          <span>{{item.name}}</span>
          <span>{{item.trackCount}}首
            <span v-if="msg == '收藏歌单'">, by {{item.creator.nickname}}</span>
          </span>
        </div>
      </div>
    </van-pull-refresh>
  </div>

</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {addToMyPlayList} from '../api/index'
// import { Toast } from 'vant'
export default {
  name:'mePlayList',
  props:['playlist', 'msg','musicId', 'listId'],
  setup(props,content) {
    const router = useRouter()
    //跳转到歌单详情 或添加到歌单
    async function toMusicList(id){
      // 跳到歌单详情
      if(props.msg != "添加歌单"){
        router.push({
          name: 'musicList',
          query:{
            id,
            msg:props.msg
          }
        })
      }
      else{  //添加到歌单
        addToMyPlayList(id,props.musicId).then(res=>{
          if(res.data.body.code == 502){
            vant.Toast('歌单内歌曲重复')
          }
          else if(res.data.body.code == 200){
            vant.Toast('添加成功')
          }
          else{
            vant.Toast('添加失败')
          }
        })
        content.emit('hidepop')
      }
    }

    const loading = ref(false);
    const onRefresh = () => {
      content.emit('reloadData')
      setTimeout(() => {
        loading.value = false;
      }, 1000);
      
    };

    // 滑动从歌单删除
    return {
      toMusicList,loading,onRefresh
    }
  }
}
</script>

<style lang="less">
.mePlayList{

  .title{
    color: rgb(119, 119, 119);
    font-size: 0.22rem;
  }
  .playlist{
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 0.1rem;
    max-height: 7rem;
    padding-bottom: 0.15rem;
    overflow: scroll;
    .listItem{
      display: flex;
      align-items: center;
      img{
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 10px;
      }
      .content{
        margin-left: 0.2rem;
        display: flex;
        flex-direction: column;
        width: 5rem;

        span{
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }

        span:first-child{
          font-size: 0.28rem;
        }

        span:last-child{
          font-size: 0.2rem;
          color: rgb(119, 119, 119);
        }
      }
    }
    .listItem:not(:first-child){
      margin-top: 0.1rem;
    }
  }
}

</style>