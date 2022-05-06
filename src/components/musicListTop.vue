<template>
  <div class="musicListTop" v-if="topInfo.data">
    <!-- 选项栏 -->
    <div class="tab">
      <div class="left">
        <svg @click="router.back()" t="1646914191117" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="48" height="48"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" p-id="2044" fill="#ffffff"></path></svg>
        <span>歌单</span>
      </div>
      <div class="right">
        <svg t="1646914280379" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3185" width="48" height="48"><path d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z" p-id="3186" fill="#ffffff"></path></svg>
        <svg t="1646914337427" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6162" width="48" height="48"><path d="M512 213.333333m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" p-id="6163" fill="#ffffff"></path><path d="M512 512m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" p-id="6164" fill="#ffffff"></path><path d="M512 810.666667m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" p-id="6165" fill="#ffffff"></path></svg>
      </div>
    </div>

    <div class="topBg">
      <img :src="topInfo.data.coverImgUrl" alt="" >
      <div class="mask">
      </div>
    </div>
    

    <!-- 文字信息部分 -->
    <div class="detail">
      <div class="coverImg">
        <img v-lazy="topInfo.data.coverImgUrl" preload="1" alt="">
        <div class="playCount">
          <svg t="1646804763613" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4541" width="48" height="48"><path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z" fill="#ffffff" p-id="4542"></path></svg>
          <span>{{formatCount(topInfo.data.playCount)}}</span>
        </div>
      </div>
      <div class="textInfo" v-if="topInfo.data.name">
        <div class="title">{{topInfo.data.name}}</div>
        <div class="creator">
          <img :src="topInfo.data.auhead" alt="">
          <span>{{topInfo.data.auname}}</span>
          <svg t="1646970656124" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16983" width="16" height="16"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="16984" fill="#e6e6e6"></path></svg>
        </div>
        <div class="desc">
          <span v-if="topInfo.data.description">{{topInfo.data.description}}</span>
          <span v-else>暂无简介</span>
          <svg v-if="topInfo.data.description" t="1646970656124" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16983" width="16" height="16"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="16984" fill="#e6e6e6"></path></svg>
        </div>
      </div>
      <van-skeleton v-else round :row="3" :row-width="['100%','30%','90%']" />
    </div>
    

    <!-- 评论收藏下载多选 -->
    <div class="options">
      <div class="item">

        <svg t="1647009893456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2377" width="48" height="48"><path d="M514.57 959.33H152.86l0.09-180.67C95.16 701.06 64.67 609.1 64.67 512 64.67 265.34 265.34 64.67 512 64.67S959.33 265.34 959.33 512c0 235.23-183.66 429.49-415.12 446.13v1.14l-29.64 0.06z m-302.4-59.3l302.21-0.06C727.03 898.68 900.03 724.65 900.03 512c0-213.96-174.07-388.03-388.03-388.03-213.96 0-388.04 174.07-388.04 388.03 0 87.21 28.36 169.66 82.01 238.42l6.28 8.05-0.08 141.56z" p-id="2378" fill="#E9E9E9"></path><path d="M663.46 477.27h-310.1c-16.37 0-29.65-13.28-29.65-29.65 0-16.37 13.28-29.65 29.65-29.65h310.1c16.37 0 29.65 13.28 29.65 29.65 0 16.37-13.27 29.65-29.65 29.65zM538.74 636.8H353.37c-16.37 0-29.65-13.28-29.65-29.65S337 577.5 353.37 577.5h185.37c16.37 0 29.65 13.28 29.65 29.65s-13.28 29.65-29.65 29.65z" p-id="2379" fill="#E9E9E9"></path></svg>
        <span>{{formatCount(topInfo.data.commentCount)}}</span>
      </div>
      <div class="item">
        <svg t="1647013660915" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1275" width="48" height="48"><path d="M768.73106 703.537712c-35.606921 0-67.945574 14.793214-91.167479 38.359147l-309.109357-171.670082c9.116748-17.545439 14.621199-37.155048 14.621199-58.312783 0-12.55703-2.408198-24.426004-5.676466-35.950949l304.63699-189.215522c22.705863 20.469679 52.464304 33.198723 85.146985 33.198723 70.525785 0 127.978498-57.452713 127.978498-127.978498S837.708718 63.989249 767.182933 63.989249s-127.978498 57.452713-127.978498 127.978498c0 14.621199 2.92424 28.382328 7.396607 41.455401L344.716278 420.746514c-23.049891-22.705863-54.700487-36.983034-89.791366-36.983034-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498c25.630102 0 49.540064-7.740635 69.493701-20.813707l321.150344 178.378633c-3.096254 11.008903-5.160423 22.18982-5.160423 34.058794 0 70.525785 57.452713 127.978498 127.978498 127.978498s127.978498-57.452713 127.978498-127.978498S839.256845 703.537712 768.73106 703.537712zM767.182933 127.978498c35.262893 0 63.989249 28.726356 63.989249 63.989249s-28.726356 63.989249-63.989249 63.989249-63.989249-28.726356-63.989249-63.989249S731.92004 127.978498 767.182933 127.978498zM191.107677 511.913993c0-35.262893 28.726356-63.989249 63.989249-63.989249s63.989249 28.726356 63.989249 63.989249-28.726356 63.989249-63.989249 63.989249S191.107677 547.176886 191.107677 511.913993zM768.73106 895.505459c-35.262893 0-63.989249-28.726356-63.989249-63.989249s28.726356-63.989249 63.989249-63.989249 63.989249 28.726356 63.989249 63.989249C832.720309 866.951117 803.993953 895.505459 768.73106 895.505459z" p-id="1276" fill="#E9E9E9"></path></svg>
        <span>{{formatCount(topInfo.data.shareCount)}}</span>
      </div>
      <div class="item">
        <svg t="1647016514382" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1466" width="48" height="48"><path d="M512 1024C229.239467 1024 0 794.760533 0 512 0 229.239467 229.239467 0 512 0a30.1056 30.1056 0 1 1 0 60.245333 451.754667 451.754667 0 1 0 268.1856 88.234667 30.139733 30.139733 0 0 1 35.84-48.469333A512 512 0 0 1 512 1024z" p-id="1467" fill="#E9E9E9"></path><path d="M512 587.298133a30.1056 30.1056 0 0 1-30.1056-30.1056V30.1056a30.1056 30.1056 0 1 1 60.2112 0v527.086933a30.1056 30.1056 0 0 1-30.1056 30.1056z" p-id="1468" fill="#E9E9E9"></path><path d="M512 609.723733a30.1056 30.1056 0 0 1-21.230933-8.874666l-127.863467-127.863467a30.1056 30.1056 0 0 1 42.632533-42.461867L512 537.019733l106.496-106.496a30.1056 30.1056 0 0 1 42.5984 42.461867l-127.863467 127.863467a30.1056 30.1056 0 0 1-21.230933 8.874666z" p-id="1469" fill="#E9E9E9"></path></svg>
        <span>下载</span>
      </div>
      <div class="item">
        <svg t="1647016536832" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1659" width="48" height="48"><path d="M512 996C244.694 996 28 779.306 28 512 28 244.694 244.694 28 512 28c267.306 0 484 216.694 484 484 0 267.306-216.694 484-484 484z m0-72c227.541 0 412-184.459 412-412S739.541 100 512 100 100 284.459 100 512s184.459 412 412 412z m-84.295-291.711L740.75 301.336c11.692-12.361 30.744-12.46 42.553-0.22l0.21 0.22 27.31 28.871c2.903 3.069 2.903 8.013 0 11.081L449.139 723.664c-11.693 12.361-30.745 12.46-42.553 0.22l-0.212-0.22-25.805-27.283-0.051 0.056-167.34-176.914c-2.904-3.069-2.904-8.012 0-11.081l27.309-28.872c11.692-12.36 30.744-12.46 42.552-0.22l0.21 0.22 144.456 152.72v-0.001z" p-id="1660" fill="#E9E9E9"></path></svg>
        <span>多选</span>
      </div>
    </div>

  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {formatCount} from '../util/formatPlayCount'
export default {
  name: 'musicListTop',
  props:['topInfo'],
  setup(props){
    const router = useRouter()
    return{
      formatCount,router
    }
  }
}
</script>

<style lang="less">
.musicListTop{
  padding: 0.3rem 0.22rem;
  width: 100vw;
  .tab{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .left, .right{
      display: flex;
      align-items: center;
      background-color: rgba(95, 93, 93, 0.3);
      border-radius: 15px;
      padding: 0.1rem 0.2rem;
      svg{
        width: 0.45rem;
        height: 0.45rem;
      }
      svg:first-child{
        margin-right: 0.2rem;
      }
      span{
        font-size: 0.35rem;
        font-weight: 500;
        color: white;
      }
    }
  }
  
  .topBg{
    width: 100%;
    height: 7.5rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(50px);
    .mask{
      background: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 7.5rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    img{
      width: 100%;
      height: 7.5rem;
    }
  }

  .detail{
    margin-top: 0.3rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    // border: 1px solid red;
    .coverImg{
      position: relative;
      img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.1rem;
      }
      .playCount{
        position: absolute;
        top: 0;
        right: 0.1rem;
        .icon{
          vertical-align:middle;
          width: 0.25rem;
          height: 0.25rem;

        }
        span{
          font-size: 0.2rem;
          color: white;
        }
      }
    }
    .textInfo{
      display: flex;
      flex-direction: column;
      margin-left: 0.3rem;
      height: 2.5rem;
      color: white;
      justify-content: space-between;

      .title{
        font-weight: 550;
      }
      .creator{
        display: flex;
        align-items: center;
        img{
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 1rem;
        }
        span{
          font-size: 0.25rem;
          margin-left: 0.1rem;
          color: rgb(235, 235, 235);
        }
        svg{
          margin-left: 0.1rem;
          width: 0.2rem;
          height: 0.2rem;
        }
      }
      .desc{
        display: flex;
        align-items: center;
        span{
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 0.22rem;
          color: rgb(221, 220, 220);
          flex: 0.95;
        }
        svg{
          margin-left: 0.1rem;
          width: 0.2rem;
          height: 0.2rem;
        }
      }
      
    }
  }

  .options{
    display: flex;
    justify-content: space-around;
    background-color: rgba(95, 93, 93, 0.3);
    border-radius: 15px;
    padding: 0.1rem 0rem;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      svg{
        fill:rgb(233, 233, 233);
        width: 0.4rem;
        height: 0.4rem;
      }
      span{
        font-size: 0.24rem;
        color: rgb(233, 233, 233);
        -webkit-transform: scale(0.9);
        margin-top: 0.03rem;
      }
    }
  }
}
</style>