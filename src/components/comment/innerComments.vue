<template>
  <div class="innerCommnets">
    <div class="ttitle">回复({{ clist.total }})</div>
    <div class="oc" v-if="clist.ownerCmt.user">
      <img :src="clist.ownerCmt.user.avatarUrl" alt="">
      <div class="innerbox">
        <div class="top">
          <div class="text">
            <span class="uname"> {{ clist.ownerCmt.user.nickname }}</span>
            <span class="ctime">{{ clist.ownerCmt.timeStr }}</span>
          </div>
          <div class="good1" @click="ilike(-1)">
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
        <svg v-show="!sort" @click="sortType()" t="1659520322626" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="7913" width="48" height="48">
          <path
            d="M64 224h426.667a32 32 0 0 0 0-64H64a32 32 0 0 0 0 64z m0 320h298.667a32 32 0 0 0 0-64H64a32 32 0 0 0 0 64z m426.667 256H64a32 32 0 0 0 0 64h426.667a32 32 0 0 0 0-64z m491.946-438.613L769.28 148.053a32 32 0 0 0-10.453-7.04 31.147 31.147 0 0 0-23.254 0 32 32 0 0 0-10.453 7.04L511.787 361.387a32 32 0 1 0 45.226 45.226l158.72-158.72v605.44a32 32 0 0 0 64 0v-605.44l158.72 158.72a32 32 0 0 0 45.227-45.226z"
            p-id="7914" fill="#2c2c2c"></path>
        </svg>
        <svg v-show="sort" @click="sortType()" t="1659520391072" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="8164" width="48" height="48">
          <path
            d="M64 224h426.667a32 32 0 0 0 0-64H64a32 32 0 0 0 0 64z m0 320h298.667a32 32 0 0 0 0-64H64a32 32 0 0 0 0 64z m426.667 256H64a32 32 0 0 0 0 64h426.667a32 32 0 0 0 0-64z m491.946-182.613a32 32 0 0 0-45.226 0l-158.72 158.72v-605.44a32 32 0 0 0-64 0v605.44l-158.72-158.72a32 32 0 0 0-45.227 45.226l213.333 213.334a32 32 0 0 0 10.454 7.04 31.147 31.147 0 0 0 23.253 0 32 32 0 0 0 10.453-7.04l213.334-213.334a32 32 0 0 0 1.066-45.226z"
            p-id="8165" fill="#2c2c2c"></path>
        </svg>
      </div>
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(c, index) in clist.comments" :key="c.commentId" @click="ifocus(index)">
          <div class="box">
            <img :src="c.user.avatarUrl" alt="">
            <div class="innerbox">
              <div class="top">
                <div class="text">
                  <span class="uname">{{ c.user.nickname }}</span>
                  <span class="ctime">{{ c.timeStr }}</span>
                </div>
                <div class="good2" @click="ilike(index)">
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
              <div class="floor" v-if="c.beReplied">
                <span>@{{c.beReplied[0].user.nickname}}</span>
                <span>: {{c.beReplied[0].content}}</span>
              </div>

            </div>
          </div>
        </van-cell>
      </van-list>

      <div class="commentWrap">
        <van-field class="icomment" v-model="ipc" center clearable placeholder="听说爱评论的人粉丝多">
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
  props: ["loadInner", "id", "type"],
  setup(props) {
    const clist = reactive({
      ownerCmt: {},
      comments: [],
      total: 0
    })
    const loading = ref(true)
    const finished = ref(false)
    //0是正序 1是逆序
    const sort = ref(0)
    // 加载全部回复
    const loadInnerComment = function (cid, sid) {
      let time = 0
      if (clist.comments.length) {
        time = sort.value ? clist.comments[0].time : clist.comments[clist.comments.length - 1].time
      }
      floorComments(cid, sid, props.type, 30, time).then(res => {
        if (res.data.data) {
          const d = res.data.data
          clist.ownerCmt = Object.assign(clist.ownerCmt, d.ownerComment)
          clist.comments = clist.comments.concat(d.comments)
          clist.total = clist.total > 0 ? clist.total : d.totalCount
          if (!d.hasMore) {
            finished.value = true
          }
          loading.value = false
        }
        else {
          loading.value = false
          finished.value = true
        }
      })
    }

    const route = useRoute()
    const onLoad = function () {
      loadInnerComment(route.query.cid.value, route.query.sid.value)
    }

    //点赞
    const ilike = async function (index) {
      if (index >= 0) {
        clist.comments[index].liked = !clist.comments[index].liked
        clist.comments[index].likedCount += clist.comments[index].liked ? 1 : -1
        const dom = document.getElementsByClassName("good2")[index]
        dom.style.color = clist.comments[index].liked ? "#d81e06" : "#bfbfbf"

        //是否点赞
        await likeComment(props.id, props.type, clist.comments[index].commentId, clist.comments[index].liked ? 1 : 0)
      }
      else {
        clist.ownerCmt.liked = !clist.ownerCmt.liked
        clist.ownerCmt.likedCount += clist.ownerCmt.liked ? 1 : -1
        const dom = document.getElementsByClassName("good1")[0]
        dom.style.color = clist.ownerCmt.liked ? "#d81e06" : "#bfbfbf"

        //是否点赞
        await likeComment(props.id, props.type, clist.ownerCmt.commentId, clist.ownerCmt.liked ? 1 : 0)
      }

    }

    //评论
    const ipc = ref("")
    let cid = undefined
    //获取焦点
    const ifocus = function (index) {
      const input = document.getElementsByClassName("icomment")[0].getElementsByTagName("input")[0]
      input.focus()
      cid = clist.comments[index].commentId
    }
    //评论
    const itoComment = async function () {
      await comment(props.id, ipc.value, 2, props.type, cid).then(res => {
        vant.Toast.success('评论成功');
        ipc.value = ""
      }).catch(err => {
        vant.Dialog.alert({
          message: "未登录",
          theme: 'round-button',
        }).then(() => {
          // on close
        });
      })
    }

    // 按时间排序
    const sortType = function () {
      sort.value ^= 1
      if (sort.value == 0) {
        clist.comments.sort((a, b) => {
          return a.time - b.time
        })
      }
      else {
        clist.comments.sort((a, b) => {
          return b.time - a.time
        })
      }

    }

    // todo->楼中楼

    return {
      clist, loading, finished, ilike, ifocus, itoComment, ipc, sortType, sort, onLoad
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
  margin-bottom: 8px;
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

      .good1 {
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
    margin-bottom: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 0.35rem;
      height: 0.35rem;
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

            .good2 {
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

          .floor{
            font-size: 0.27rem;
            color: #bfbfbf;
            span:first-child{
              color: rgb(47, 93, 177);
            }
          }
          .floor::before{
            content: "|";
            color: #bfbfbf;
          }
        }
      }
    }
  }

  .commentWrap {
    height: 1rem;

    .icomment {
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