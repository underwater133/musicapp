<template>
  <div class="innerCommnets">
    <div class="ttitle">回复({{clist.total}})</div>
    <div class="oc" v-if="clist.ownerCmt.user">
      <img :src="clist.ownerCmt.user.avatarUrl" alt="">
      <div class="innerbox">
        <div class="top">
          <div class="text">
            <span class="uname"> {{ clist.ownerCmt.user.nickname }}</span>
            <span class="ctime">{{ clist.ownerCmt.timeStr }}</span>
          </div>
          <div class="good">
            <span v-if="clist.ownerCmt.likedCount > 0">{{ clist.ownerCmt.likedCount }}</span>
            <svg v-if="!clist.ownerCmt.liked" t="1659443387348" class="icon" viewBox="0 0 1024 1024" version="1.1"
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
          {{ clist.ownerCmt.content }}
        </div>

      </div>
    </div>

    <div class="list">
      <div class="title">
        <span>全部回复</span>
      </div>
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了">
        <van-cell v-for="(c, index) in clist.comments" :key="c.commentId" @click="ifocus(index)">
          <div class="box">
            <img :src="c.user.avatarUrl" alt="">
            <div class="innerbox">
              <div class="top">
                <div class="text">
                  <span class="uname">{{ c.user.nickname }}</span>
                  <span class="ctime">{{ c.timeStr }}</span>
                </div>
                <div class="good" @click="ilike(index)">
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

            </div>
          </div>
        </van-cell>
      </van-list>

      <div class="commentWrap">
        <van-field class="comment" v-model="ipc" center clearable placeholder="听说爱评论的人粉丝多">
          <template #button>
            <van-button size="small" type="primary" @click="itoComment()">评论</van-button>
          </template>
        </van-field>
      </div>

    </div>
  </div>
</template>
<script>
import { likeComment, comment, floorComments } from '../../api/index.js'
import { watch, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: "innerComments",
  props: ["loadInner"],
  setup(props) {
    const clist = reactive({
      ownerCmt: {},
      comments: [],
      total: 0
    })
    const loading = ref(true)
    const finished = ref(false)
    // 加载全部回复
    const loadInnerComment = function (cid, sid) {
      floorComments(cid, sid, 2).then(res => {
        if (res.data.data) {
          const d = res.data.data
          console.log(d)
          clist.ownerCmt = d.ownerComment
          clist.comments = d.comments
          clist.total = d.totalCount
        }
        loading.value = false
        finished.value = true
      })
    }
    const route = useRoute()
    watch(props, val => {
      if (val.loadInner) {
        loadInnerComment(route.query.cid.value, route.query.sid.value)
      }
      else {
        clist.comments = []
        clist.ownerCmt = {}
      }
    }, { immediate: true })

    //点赞
    const ilike = async function (index) {
      clist.comments[index].liked = !clist.comments[index].liked
      clist.comments[index].likedCount += clist.comments[index].liked ? 1 : -1
      const dom = document.getElementsByClassName("good")[index]
      dom.style.color = clist.comments[index].liked ? "#d81e06" : "#bfbfbf"

      //是否点赞
      await likeComment(props.id, 2, clist.comments[index].commentId, clist.comments[index].liked ? 1 : 0)

    }

    //评论
    const ipc = ref("")
    let cid = undefined
    //获取焦点
    const ifocus = function (index) {
      const input = document.getElementsByClassName("comment")[0].getElementsByTagName("input")[0]
      input.focus()
      cid = clist.comments[index].commentId
    }
    //评论
    const itoComment = async function () {
      await comment(props.id, pc.value, 1, 2, cid).catch(err => {
        vant.Dialog.alert({
          message: '由于vercel部署项目启用https协议，评论接口无法使用，请见谅~',
          theme: 'round-button',
        }).then(() => {
          // on close
        });
      })
    }

    //todo
    //按时间排序、原评论点赞、楼中楼

    return {
      clist, loading, finished, ilike, ifocus, itoComment, ipc
    }
  }
}
</script>
<style lang="less" scoped>
.innerCommnets {
  background-color: #f0f0f0;
}

.ttitle {
  font-size: 0.32rem;
  font-weight: 500;
  text-align: center;
  padding: 0.2rem 0.22rem;
  background-color: white;
}

.oc {
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 10px;
  padding: 0 0.22rem;

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