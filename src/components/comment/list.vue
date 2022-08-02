<template>
  <div class="list">
    <div class="title">
      <span>评论区</span>
    </div>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="c in clist.comments" :key="c.commentId">
        <div class="box">
          <img :src="c.user.avatarUrl" alt="">
          <div class="innerbox">
            <div class="top">
              <div class="text">
                <span class="uname">{{ c.user.nickname }}</span>
                <span class="ctime">{{ c.timeStr }}</span>
              </div>
              <div class="good">
                <span v-if="c.likedCount > 0">{{c.likedCount}}</span>
                <svg t="1659443387348" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11772" width="48" height="48"><path d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z" p-id="11773" fill="#bfbfbf"></path></svg>
                <!-- <svg t="1659444723026" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13380" width="48" height="48"><path d="M889.6 396.8l-281.6 0c25.6-134.4 76.8-300.8-32-352-115.2-51.2-121.6 19.2-134.4 134.4-12.8 121.6-192 249.6-192 249.6l0 563.201 608 0c83.2-38.4 134.4-377.6 160-499.2s-128-96-128-96zM0 428.8l179.201 0 0 569.6-179.201 0 0-569.6z" p-id="13381" fill="#d81e06"></path></svg> -->
              </div>
            </div>
            <div class="content">
              {{ c.content }}
            </div>
            <div class="more" v-if="c.beReplied.length > 0">
              {{ c.beReplied.length }}条回复 >
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import { watch, reactive, ref } from 'vue'
import { playlistComments } from '../../api/index.js'

export default {
  name: "commentList",
  props: ["id"],
  setup(props) {
    const clist = reactive({
      comments: []
    })
    const limit = 10
    let offset = 0
    const loading = ref(true)
    const finished = ref(false)
    const total = ref(999)
    const getComments = function () {
      playlistComments(props.id, limit, offset).then(res => {
        console.log(res)
        total.value = res.data.total 
        // if (res.data.hotComments) clist.comments = clist.comments.concat(res.data.hotComments)
        clist.comments = clist.comments.concat(res.data.comments)
        console.log(total.value)
        loading.value = false
        offset += clist.comments.length
        if(offset >= res.data.total || res.data.more == false){
          finished.value = true
        }
      })
    }
    const onLoad = function () {
      getComments()
    }


    return {
      clist, onLoad, finished, loading
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  background-color: white;
  position: relative;
  padding: 0.15rem 0.22rem;

  .title {
    font-size: 0.27rem;
    font-weight: 500;
    height: 0.52rem;
    width: 100%;
    background-color: white;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .van-list {
    .van-cell {
      padding: 0;
      margin-bottom: 0.1rem;

      .box {
        display: flex;
        justify-content: space-between;

        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
        }

        .innerbox {
          flex: 1;
          margin-left: 0.1rem;

          .top {
            display: flex;
            justify-content: space-between;

            .text {
              flex: 1;

              .uname {
                display: block;
                color: #464646;
                font-size: 0.23rem;
                height: 0.23rem;
              }

              .ctime {
                display: block;
                color: #bfbfbf;
                font-size: 0.15rem;
                height: 0.23rem;
              }
            }

            .good {
              align-self: flex-end;
              color: #bfbfbf;
              span{
                font-size: 0.23rem;
                margin-right: 0.1rem;
              }
              svg{
                vertical-align:text-top;
                width: 0.33rem;
                height: 0.33rem;
              }
            }
          }

          .content {
            margin: 5px 0;
            font-size: 0.27rem;
          }

          .more {
            font-size: 0.23rem;
            color: rgb(47, 93, 177);
            margin-bottom: 5px;
          }
        }
      }
    }
  }


}
</style>