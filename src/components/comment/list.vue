<template>
  <div class="list">
    <div class="title">
      <span>评论区</span>
      <div class="sort" @click="changeSortType">
        <span class="active">推荐</span>
        <span>最热</span>
        <span>最新</span>
      </div>
    </div>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(c, index) in clist.comments" :key="c.commentId" @click="focus(index)">
        <div class="box">
          <img :src="c.user.avatarUrl" alt="">
          <div class="innerbox">
            <div class="top">
              <div class="text">
                <span class="uname">{{ c.user.nickname }}</span>
                <span class="ctime">{{ c.timeStr }}</span>
              </div>
              <div class="good" @click="like(index)">
                <span v-if="c.likedCount > 0">{{ c.likedCount }}</span>
                <svg v-if="!c.liked" t="1659443387348" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="11772" width="48" height="48">
                  <path
                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                    p-id="11773" fill="#bfbfbf"></path>
                </svg>
                <svg v-else t="1659444723026" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="13380" width="48" height="48">
                  <path
                    d="M889.6 396.8l-281.6 0c25.6-134.4 76.8-300.8-32-352-115.2-51.2-121.6 19.2-134.4 134.4-12.8 121.6-192 249.6-192 249.6l0 563.201 608 0c83.2-38.4 134.4-377.6 160-499.2s-128-96-128-96zM0 428.8l179.201 0 0 569.6-179.201 0 0-569.6z"
                    p-id="13381" fill="#d81e06"></path>
                </svg>
              </div>
            </div>
            <div class="content">
              {{ c.content }}
            </div>
            <div class="more" v-if="c.replyCount > 0" @click="showpop(index)">
              {{ c.replyCount }}条回复 >
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
    <div class="commentWrap">
      <van-field class="comment" v-model="pc" center clearable placeholder="听说爱评论的人粉丝多">
        <template #button>
          <van-button size="small" type="primary" @click="toComment()">评论</van-button>
        </template>
      </van-field>
    </div>

    <van-popup v-if="showp" v-model:show="showp" :style="{ height: '90%' }" round position="bottom">
      <innerComments :loadInner="loadInner" :id="id" :type="type"></innerComments>
    </van-popup>

  </div>
</template>
<script>
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { likeComment, comment, newComments } from '../../api/index.js'
import innerComments from './innerComments.vue'
export default {
  name: "commentList",
  props: ["id", "type"],
  components: { innerComments },
  setup(props) {
    const clist = reactive({
      comments: []
    })
    const pageSize = 10
    let pageNo = 1
    //排序方式 1是推荐 2是热度 3是时间
    let sortType = 1
    const loading = ref(true)
    const finished = ref(false)
    const total = ref(999)
    console.log(props.type)
    //目前只有歌单和单曲， 2是歌单，0是单曲
    const type = props.type == "list" ? 2 : 0
    const getComments = function () {
      const cursor = clist.comments.length ? clist.comments[clist.comments.length - 1].time : 0
      newComments(props.id, type, pageNo, pageSize, sortType, cursor).then(res => {
        total.value = res.data.data.totalCount
        clist.comments = clist.comments.concat(res.data.data.comments)
        loading.value = false
        pageNo++
        if (res.data.data.hasMore == false) {
          finished.value = true
        }
      })
    }
    const onLoad = function () {
      getComments()
    }

    //点赞
    const like = async function (index) {
      clist.comments[index].liked = !clist.comments[index].liked
      clist.comments[index].likedCount += clist.comments[index].liked ? 1 : -1
      const dom = document.getElementsByClassName("good")[index]
      dom.style.color = clist.comments[index].liked ? "#d81e06" : "#bfbfbf"

      //是否点赞
      await likeComment(props.id, type, clist.comments[index].commentId, clist.comments[index].liked ? 1 : 0)
    }

    //评论
    const pc = ref("")
    let cid = undefined
    //获取焦点
    const focus = function (index) {
      const input = document.getElementsByClassName("comment")[0].getElementsByTagName("input")[0]
      input.focus()
      cid = clist.comments[index].commentId
    }
    const toComment = function () {
      comment(props.id, pc.value, 1, type, cid).then(res => {
        vant.Toast.success('评论成功');
        pc.value = ""
      }).catch(err => {
        vant.Dialog.alert({
          message: "未登录",
          theme: 'round-button',
        }).then(() => {
          // on close
        });
      })
    }

    //修改排序方式
    const changeSortType = function (e) {
      const dom = document.getElementsByClassName("sort")[0]
      for (let i = 0; i < dom.childNodes.length; i++) {
        if (dom.childNodes[i] == e.target) {
          if (i + 1 !== sortType) {
            sortType = i + 1
            dom.childNodes[i].className += ' active'
            clist.comments = []
            pageNo = 1
            loading.value = true
            finished.value = false
            getComments()
          }
        }
        else {
          dom.childNodes[i].className = ""
        }
      }
    }

    //评论弹出层
    const showp = ref(false)
    const route = useRoute()
    const loadInner = ref(false)
    const showpop = function (index) {
      showp.value = true
      route.query.cid = ref(clist.comments[index].commentId)
      route.query.sid = ref(props.id)
    }
    watch(showp, () => {
      loadInner.value = !loadInner.value
    })
    return {
      clist, onLoad, finished, loading, like, focus, toComment, changeSortType, pc, showp, showpop, loadInner, type
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

    display: flex;
    justify-content: space-between;

    .sort {
      span {
        display: inline-block;
        color: #bfbfbf;
        font-size: 0.25rem;
        padding-left: 5px;
      }

      span:not(:last-child)::after {
        content: "|";
        color: #bfbfbf;
        padding-left: 5px;
      }

      .active {
        color: black;
      }
    }
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
          padding-bottom: 8px;

          .top {
            display: flex;
            justify-content: space-between;
            height: 0.5rem;

            .text {
              flex: 1;

              .uname {
                display: block;
                color: #464646;
                font-size: 0.23rem;
                height: 0.26rem;
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

              span {
                font-size: 0.23rem;
                margin-right: 0.1rem;
              }

              svg {
                vertical-align: text-top;
                width: 0.33rem;
                height: 0.33rem;
              }
            }
          }

          .content {
            margin-top: 8px;
            font-size: 0.27rem;
          }

          .more {
            font-size: 0.23rem;
            color: rgb(47, 93, 177);
          }
        }
      }
    }
  }

  .commentWrap {
    height: 1rem;

    .comment {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 1rem;
      z-index: 10;

      button {
        background-color: orangered;
        border: none;
      }
    }
  }
}
</style>