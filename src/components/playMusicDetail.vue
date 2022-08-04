<template>
  <div class="playMusicDetail">
    <div v-if="playIndex >= 0" :style="{ backgroundImage: `url(${playlist[playIndex].al.picUrl})` }" alt="" class="bg">
      <div class="warp"></div>
    </div>
    <img v-else style="background:gray;" class="bg">

    <!-- 顶部信息 -->
    <div class="playTop">
      <svg @click="$emit('back')" t="1647149365200" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="53912" width="48" height="48">
        <path
          d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z"
          p-id="53913" fill="#ffffff"></path>
      </svg>
      <div class="textInfo">
        <span v-if="playIndex >= 0" class="name">{{ playlist[playIndex].name }}</span>
        <span v-else>发现好音乐</span>
        <span v-if="playIndex >= 0" class="au">
          <span v-for="(item, i) in playlist[playIndex].ar" :key="i">{{ item.name }}&nbsp;</span>
        </span>
      </div>
      <svg t="1647149380493" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="54107" width="48" height="48">
        <path
          d="M768.73106 703.537712c-35.606921 0-67.945574 14.793214-91.167479 38.359147l-309.109357-171.670082c9.116748-17.545439 14.621199-37.155048 14.621199-58.312783 0-12.55703-2.408198-24.426004-5.676466-35.950949l304.63699-189.215522c22.705863 20.469679 52.464304 33.198723 85.146985 33.198723 70.525785 0 127.978498-57.452713 127.978498-127.978498S837.708718 63.989249 767.182933 63.989249s-127.978498 57.452713-127.978498 127.978498c0 14.621199 2.92424 28.382328 7.396607 41.455401L344.716278 420.746514c-23.049891-22.705863-54.700487-36.983034-89.791366-36.983034-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498c25.630102 0 49.540064-7.740635 69.493701-20.813707l321.150344 178.378633c-3.096254 11.008903-5.160423 22.18982-5.160423 34.058794 0 70.525785 57.452713 127.978498 127.978498 127.978498s127.978498-57.452713 127.978498-127.978498S839.256845 703.537712 768.73106 703.537712zM767.182933 127.978498c35.262893 0 63.989249 28.726356 63.989249 63.989249s-28.726356 63.989249-63.989249 63.989249-63.989249-28.726356-63.989249-63.989249S731.92004 127.978498 767.182933 127.978498zM191.107677 511.913993c0-35.262893 28.726356-63.989249 63.989249-63.989249s63.989249 28.726356 63.989249 63.989249-28.726356 63.989249-63.989249 63.989249S191.107677 547.176886 191.107677 511.913993zM768.73106 895.505459c-35.262893 0-63.989249-28.726356-63.989249-63.989249s28.726356-63.989249 63.989249-63.989249 63.989249 28.726356 63.989249 63.989249C832.720309 866.951117 803.993953 895.505459 768.73106 895.505459z"
          p-id="54108" fill="#ffffff"></path>
      </svg>
    </div>

    <!-- 中间部分光碟 -->
    <div class="playContent">
      <img :style="needle" v-show="!showLyric" src="../assets/img/needle-ab.png" alt="">
      <div v-show="!showLyric" class="disc" @click="showLyric = !showLyric" :style="{ AnimationPlayState }">
        <img src="../assets/img/disc.png" alt="">
        <img v-if="playIndex >= 0" :src="playlist[playIndex].al.picUrl" alt="" class="pic">
        <img v-else src="../assets/img/disc_default.png" alt="" class="pic">
      </div>


      <!-- 浏览歌词 -->
      <div class="playLyric" v-show="showLyric" @click="showLyric = !showLyric">
        <div class="scroll-lrc">
          <p :class="{ active: getLyricState(item.time, item.nextTime) }" v-for="(item, i) in lyric" :key="i">{{
              item.lrc
          }}
          </p>
        </div>
      </div>
    </div>






    <div class="bottom">
      <!-- 选项 -->
      <div class="playOptions">
        <svg t="1647154959984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="54738" width="48" height="48">
          <path
            d="M523.733333 841.024l33.173334-32.576 99.690666-97.813333c70.976-69.632 120.32-117.973333 138.709334-135.893334 59.008-57.514667 93.248-121.28 99.626666-184.234666 6.250667-61.44-15.488-119.744-61.589333-164.672-44.992-43.84-98.88-61.909333-157.034667-52.906667-49.365333 7.616-101.034667 34.624-150.016 78.848a21.333333 21.333333 0 0 1-28.586666 0c-48.981333-44.224-100.650667-71.232-150.016-78.869333-58.154667-8.96-112.042667 9.088-157.034667 52.928-46.101333 44.928-67.84 103.210667-61.610667 164.693333 6.4 62.933333 40.64 126.72 99.648 184.213333a100207.573333 100207.573333 0 0 1 145.92 142.826667l24.256 23.765333L512 852.522667l11.733333-11.498667z m-11.733333 11.52l-1.493333 1.429333A2.133333 2.133333 0 0 1 512 853.333333c0.512 0 1.045333 0.213333 1.493333 0.64l-1.493333-1.450666z m157.781333-721.792c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z"
            fill="#eeedec" p-id="54739"></path>
        </svg>
        <svg t="1647155025374" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="55025" width="48" height="48">
          <path
            d="M490.155 696.835c5.703 5.703 13.229 8.617 20.753 8.496 7.524 0 15.05-2.791 20.875-8.496l179.739-179.739c11.408-11.408 11.408-29.855 0-41.142-5.703-5.703-13.107-8.496-20.631-8.496s-14.928 2.791-20.631 8.496L540.038 606.176V122.787c0-16.142-12.986-29.127-29.127-29.127s-29.127 12.986-29.127 29.127v483.267L351.562 475.832c-5.703-5.703-13.107-8.496-20.631-8.496s-14.928 2.791-20.631 8.496c-11.408 11.408-11.408 29.855 0 41.142l179.86 179.86z"
            p-id="55026" fill="#eeedec"></path>
          <path
            d="M883.007 497.194a29.057 29.057 0 0 0-29.127 29.127c0 189.084-153.767 342.85-342.85 342.85s-342.85-153.767-342.85-342.85c0-16.142-12.986-29.127-29.127-29.127s-29.127 12.986-29.127 29.127c0 54.128 10.559 106.678 31.554 156.194 20.146 47.818 49.152 90.658 85.925 127.553 36.773 36.773 79.735 65.778 127.553 85.925 49.516 20.875 102.066 31.554 156.194 31.554 54.128 0 106.678-10.559 156.194-31.554 47.818-20.146 90.658-49.152 127.553-85.925 36.773-36.773 65.778-79.735 85.925-127.553 20.875-49.516 31.554-102.066 31.554-156.194-0.242-16.02-13.349-29.127-29.37-29.127z"
            p-id="55027" fill="#eeedec"></path>
        </svg>
        <svg t="1647155048253" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="55221" width="48" height="48">
          <path
            d="M512.3 644.6c-57.8 0-112.3-20.5-153.6-57.8C317 549.2 294 499.2 294 446.1c0-8.4 6.8-15.3 15.3-15.3s15.3 6.8 15.3 15.3c0 92.6 84.2 168 187.7 168 103.5 0 187.7-75.4 187.7-168 0-8.4 6.8-15.3 15.3-15.3s15.3 6.8 15.3 15.3c0 53.1-23 103.1-64.7 140.8-41.3 37.2-95.8 57.7-153.6 57.7z"
            fill="#eeedec" p-id="55222"></path>
          <path
            d="M512.3 789.6c-8.4 0-15.3-6.8-15.3-15.3V631.8c0-8.4 6.8-15.3 15.3-15.3 8.4 0 15.3 6.8 15.3 15.3v142.5c0 8.5-6.9 15.3-15.3 15.3z"
            fill="#eeedec" p-id="55223"></path>
          <path
            d="M639.1 789.6H385.4c-8.4 0-15.3-6.8-15.3-15.3s6.8-15.3 15.3-15.3h253.7c8.4 0 15.3 6.8 15.3 15.3s-6.8 15.3-15.3 15.3zM513.1 575.8c-71.6 0-129.8-58.2-129.8-129.8v-81.4c0-71.6 58.2-129.8 129.8-129.8S642.9 293 642.9 364.6V446c0 71.6-58.2 129.8-129.8 129.8z m0-310.4c-54.7 0-99.3 44.5-99.3 99.3v81.4c0 54.7 44.5 99.3 99.3 99.3 54.7 0 99.3-44.5 99.3-99.3v-81.4c-0.1-54.8-44.6-99.3-99.3-99.3z"
            fill="#eeedec" p-id="55224"></path>
          <path
            d="M512.3 978.7c-63 0-124.1-12.3-181.6-36.7-55.5-23.5-105.4-57.1-148.3-100-42.8-42.8-76.5-92.7-100-148.3-24.3-57.5-36.7-118.6-36.7-181.6S58 388 82.4 330.5c23.5-55.5 57.1-105.4 100-148.3s92.7-76.5 148.3-100c57.5-24.3 118.6-36.7 181.6-36.7s124.1 12.3 181.6 36.7c55.5 23.5 105.4 57.1 148.3 100 42.8 42.8 76.5 92.7 100 148.3 24.3 57.5 36.7 118.6 36.7 181.6s-12.3 124.1-36.7 181.6c-23.5 55.5-57.1 105.4-100 148.3-42.8 42.8-92.7 76.5-148.3 100-57.6 24.4-118.7 36.7-181.6 36.7z m0-896.2c-236.9 0-429.7 192.8-429.7 429.7s192.8 429.7 429.7 429.7c236.9 0 429.7-192.8 429.7-429.7S749.2 82.5 512.3 82.5z"
            fill="#eeedec" p-id="55225"></path>
        </svg>
        <div style="position: relative;">
          <svg @click="toComment()" t="1647155203078" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="55765" width="48" height="48">
            <path
              d="M514.57 959.33H152.86l0.09-180.67C95.16 701.06 64.67 609.1 64.67 512 64.67 265.34 265.34 64.67 512 64.67S959.33 265.34 959.33 512c0 235.23-183.66 429.49-415.12 446.13v1.14l-29.64 0.06z m-302.4-59.3l302.21-0.06C727.03 898.68 900.03 724.65 900.03 512c0-213.96-174.07-388.03-388.03-388.03-213.96 0-388.04 174.07-388.04 388.03 0 87.21 28.36 169.66 82.01 238.42l6.28 8.05-0.08 141.56z"
              p-id="55766" fill="#eeedec"></path>
            <path
              d="M663.46 477.27h-310.1c-16.37 0-29.65-13.28-29.65-29.65 0-16.37 13.28-29.65 29.65-29.65h310.1c16.37 0 29.65 13.28 29.65 29.65 0 16.37-13.27 29.65-29.65 29.65zM538.74 636.8H353.37c-16.37 0-29.65-13.28-29.65-29.65S337 577.5 353.37 577.5h185.37c16.37 0 29.65 13.28 29.65 29.65s-13.28 29.65-29.65 29.65z"
              p-id="55767" fill="#eeedec"></path>
          </svg>
          <span class="comment">{{ formatCommentCount(totalComments) }}</span>
        </div>

        <svg t="1647855304177" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="9269" width="48" height="48">
          <path
            d="M512.1 64.56c-247 0-447.23 200.23-447.23 447.23S265.1 959.03 512.1 959.03 959.33 758.8 959.33 511.8 759.1 64.56 512.1 64.56z m0 838.57c-215.78 0-391.33-175.55-391.33-391.33S296.32 120.47 512.1 120.47 903.43 296.02 903.43 511.8 727.88 903.13 512.1 903.13z"
            p-id="9270" fill="#ffffff"></path>
          <path d="M512.1 511.8m-41.93 0a41.93 41.93 0 1 0 83.86 0 41.93 41.93 0 1 0-83.86 0Z" p-id="9271"
            fill="#ffffff"></path>
          <path d="M512.1 316.13m-41.93 0a41.93 41.93 0 1 0 83.86 0 41.93 41.93 0 1 0-83.86 0Z" p-id="9272"
            fill="#ffffff"></path>
          <path d="M512.1 707.46m-41.93 0a41.93 41.93 0 1 0 83.86 0 41.93 41.93 0 1 0-83.86 0Z" p-id="9273"
            fill="#ffffff"></path>
        </svg>
      </div>
      <!-- 进度条 -->
      <div class="playProgress">
        <span>{{ strCurrentTime }}</span>
        <div class="progress">
          <span class="currentPro" :style="{ width: proWidth }"></span>
        </div>
        <span>{{ strDuration }}</span>
      </div>

      <!-- 控制器 -->
      <div class="playControl">
        <svg t="1647235369838" v-if="playmode == 0" @click="$emit('changeMode')" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1776" width="48" height="48">
          <path
            d="M659.63 879.59H364.29c-40.13 0-79.07-8.3-115.72-24.67-35.3-15.76-66.97-38.3-94.14-66.99-55.64-58.75-86.28-136.77-86.28-219.7 0-82.92 30.64-160.94 86.28-219.7 27.17-28.69 58.84-51.23 94.14-67 36.65-16.37 75.58-24.67 115.72-24.67h295.34c10.15 0 20.37 0.54 30.38 1.62 13.18 1.41 22.72 13.24 21.3 26.42s-13.24 22.72-26.42 21.3c-8.31-0.89-16.81-1.34-25.26-1.34H364.29c-66.03 0-128.18 27.23-175.01 76.67-47.16 49.8-73.13 116.1-73.13 186.69s25.97 136.89 73.13 186.69c46.82 49.44 108.97 76.67 175.01 76.67h295.34c66.03 0 128.18-27.23 175.01-76.67 47.16-49.8 73.13-116.1 73.13-186.69 0-13.25 10.75-24 24-24s24 10.75 24 24c0 82.92-30.64 160.94-86.28 219.69-27.17 28.69-58.84 51.23-94.14 67-36.65 16.38-75.59 24.68-115.72 24.68z"
            p-id="1777" fill="#ffffff"></path>
          <path
            d="M896.94 260.76l-185.33-107c-15.48-8.94-34.83 2.23-34.83 20.11v214c0 17.88 19.35 29.05 34.83 20.11l185.33-107c15.48-8.94 15.48-31.28 0-40.22z"
            p-id="1778" fill="#ffffff"></path>
        </svg>
        <svg t="1647855217997" v-if="playmode == 1" @click="$emit('changeMode')" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7494" width="48" height="48">
          <path
            d="M938.61 570.44c-10.7 0-19.82 8.18-20.52 18.86C908.35 740 782.63 859.64 629.5 859.64H402.48c-156.61 0-290.18-121.55-296.09-278.05-6.22-164.53 125.82-300.36 288.99-300.36H533.1v-0.01h165.04v100.5c0 13.14 14.36 21.23 25.6 14.43L924 275c10.85-6.56 10.85-22.3 0-28.86L723.74 124.98c-11.24-6.8-25.6 1.29-25.6 14.43v100.5H489.79v0.01h-86.96c-185.3 0-341.42 151.64-337.9 336.91 3.41 179.59 150.05 324.13 330.46 324.13H629.5c175.07 0 318.35-136.11 329.78-308.29 0.8-11.99-8.65-22.23-20.67-22.23z"
            p-id="7495" fill="#ffffff"></path>
          <path d="M550 708V456.66h-25.92l-67.45 54.67 17.75 21.65L519.47 495h0.71v213z" p-id="7496" fill="#ffffff">
          </path>
        </svg>
        <svg t="1647855254676" v-if="playmode == 2" @click="$emit('changeMode')" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8354" width="48" height="48">
          <path
            d="M84.21 273.16h59.57c86.85 0 162.98 46.56 204.87 116 3.9 6.47 10.7 10.62 18.25 10.62 16.55 0 26.52-18.11 17.99-32.29-49.2-81.78-138.72-136.54-241.12-136.54H84.21c-11.65 0-21.1 9.45-21.1 21.1 0 11.66 9.45 21.11 21.1 21.11z m862.6 468.13L751.53 628.55c-18.06-10.43-40.64 2.61-40.64 23.47v99.48h-9.42c-86.85 0-162.98-46.56-204.87-116-3.9-6.47-10.7-10.62-18.25-10.62-16.55 0-26.52 18.11-17.99 32.29 49.2 81.78 138.72 136.54 241.12 136.54h9.42v83.8c0 20.86 22.58 33.9 40.64 23.47l195.27-112.74c18.06-10.45 18.06-36.52 0-46.95z"
            p-id="8355" fill="#ffffff"></path>
          <path
            d="M710.27 273.87v97.17c0 20.86 22.58 33.9 40.64 23.47l195.27-112.74c18.07-10.43 18.07-36.5 0-46.93L750.91 122.09c-18.06-10.43-40.64 2.61-40.64 23.47v86.27c-146.67 8.97-255.16 131.52-295.79 280.5-55.29 153.52-138.82 239.17-270.7 239.17H84.21c-11.65 0-21.1 9.45-21.1 21.1s9.45 21.1 21.1 21.1h59.57c155.4 0 270.7-126.62 312.91-281.37 52.84-146.72 131.59-231.25 253.58-238.46z"
            p-id="8356" fill="#ffffff"></path>
        </svg>

        <svg t="1647235392268" @click="$emit('pre')" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="1972" width="48" height="48">
          <path
            d="M803.584 134.592c-18.176-10.048-39.936-10.112-58.112 0L192 443.008l0-282.88c0-17.664-14.336-32-32-32S128 142.464 128 160.128l0 344.896C127.744 507.2 127.104 509.248 127.104 511.488S127.744 515.84 128 518.016l0 346.112c0 17.664 14.336 32 32 32s32-14.336 32-32L192 579.968l553.408 308.352C754.56 893.44 764.48 896 774.528 896s19.968-2.56 29.056-7.616c18.176-10.112 28.992-28.224 28.992-48.576L832.576 183.104C832.576 162.88 821.76 144.768 803.584 134.592zM768.192 829.248 198.016 511.488 771.328 192 768.192 829.248z"
            p-id="1973" fill="#ffffff"></path>
        </svg>
        <svg v-if="!isPlaying" @click="$emit('play')" t="1647235411014" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2167" width="48" height="48">
          <path
            d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
            p-id="2168" fill="#ffffff"></path>
          <path
            d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
            p-id="2169" fill="#ffffff"></path>
        </svg>
        <svg v-else t="1647235885029" @click="$emit('play')" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="6164" width="48" height="48">
          <path
            d="M512 42.667008C254.733312 42.667008 42.665984 254.736384 42.665984 512s212.067328 469.331968 469.331968 469.331968c257.26464 0 469.334016-212.067328 469.334016-469.331968 0-257.26464-212.069376-469.334016-469.334016-469.334016M512 1024C228.692992 1024 0 795.307008 0 512 0 228.692992 228.692992 0 512 0c283.307008 0 512 228.692992 512 512 0 283.307008-228.692992 512-512 512"
            p-id="6165" fill="#ffffff"></path>
          <path d="M384 341.332992h85.332992v341.332992H384zM554.667008 341.332992H640v341.332992h-85.332992z"
            p-id="6166" fill="#ffffff"></path>
        </svg>

        <svg t="1647235418636" @click="$emit('next')" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="2363" width="48" height="48">
          <path
            d="M832 160.128c0-17.664-14.336-32-32-32S768 142.464 768 160.128l0 282.88L214.592 134.592c-18.176-10.112-39.936-10.048-58.112 0C138.24 144.768 127.424 162.88 127.424 183.168l0 656.64c0 20.224 10.816 38.464 29.056 48.576C165.568 893.44 175.488 896 185.472 896s19.968-2.56 29.056-7.616L768 579.968l0 284.096c0 17.664 14.336 32 32 32s32-14.336 32-32L832 160.128zM191.808 829.248 188.672 192l573.312 319.488L191.808 829.248z"
            p-id="2364" fill="#ffffff"></path>
        </svg>
        <svg t="1647235429918" @click="showpopList = true" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="2558" width="48" height="48">
          <path
            d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM405.333333 170.666667h554.666667a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667z m554.666667 341.333333H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM56.873333 252.893333a26.573333 26.573333 0 0 0 27.48-1.56l117.333334-80a26.666667 26.666667 0 0 0 0-44.066666l-117.333334-80A26.666667 26.666667 0 0 0 42.666667 69.333333v160a26.6 26.6 0 0 0 14.206666 23.56z"
            fill="#ffffff" p-id="2559"></path>
        </svg>
      </div>

    </div>


    <!-- 播放列表 -->
    <van-popup v-model:show="showpopList" round position="bottom">
      <popPlaylist />
    </van-popup>

  </div>
</template>

<script>
import store from '../store/index'
import { ref, computed, reactive, watch, inject, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import popPlaylist from './common/popPlaylist.vue'
import { newComments } from '../api/index'
export default {
  name: 'playMusicDetail',
  components: { popPlaylist },
  props: ['playmode'],
  setup(props, content) {
    let playIndex = computed(() => store.state.playCurrentIndex)
    let playlist = computed(() => store.state.playList)
    let isPlaying = computed(() => store.state.isPlaying)
    let playSong = computed(() => store.state.playList[store.state.playCurrentIndex])
    let needle = reactive({
      width: "2rem",
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-25%)",
      transform: "rotate(-20deg)",
      transformOrigin: "0.3rem 0.2rem",
      transition: "all 1s",
      zIndex: 3,
    })
    let showLyric = ref(false)
    let audio = inject('audio')
    let currentTime = ref(0)
    let strCurrentTime = ref("00:00")
    let proWidth = ref("0%")
    let strDuration = ref('00:00')

    const totalComments = ref(0)
    watch(playSong, () => {
      setTimeout(() => {
        try {
          let durMin = parseInt(audio.value.duration / 60).toString()
          let durSec = parseInt(audio.value.duration % 60).toString()
          if (durMin.length < 2) durMin = "0" + durMin
          if (durSec.length < 2) durSec = "0" + durSec
          strDuration.value = durMin + ":" + durSec
        } catch (e) {
          console.log(e)
        }
      }, 500)
      // 获取歌曲评论数
      newComments(playlist.value[playIndex.value].id, 0, 1, 1, 3, 0).then(res => {
        if (res.data.data) {
          totalComments.value = res.data.data.totalCount
        }
      })
    }, { immediate: true })

    //切换唱片是否旋转
    let AnimationPlayState = inject('AnimationPlayState')
    watch(isPlaying, (newValue) => {
      if (newValue) {
        needle.transform = "rotate(5deg)"
      } else {
        needle.transform = "rotate(-20deg)"
      }
    }, { immediate: true })


    // 设置当前播放时间
    let timer;
    onMounted(() => {
      timer = setInterval(() => {
        if (playIndex.value >= 0) {
          try {
            currentTime.value = audio.value.currentTime
            let curMin = parseInt(currentTime.value / 60).toString()
            let curSec = parseInt(currentTime.value % 60).toString()
            if (curMin.length < 2) curMin = "0" + curMin
            if (curSec.length < 2) curSec = "0" + curSec
            strCurrentTime.value = curMin + ":" + curSec
          } catch (e) {
            console.log(e)
          }
        }

      }, 100)

      // 设置进度条可拖动
      const musicBar = document.getElementsByClassName('currentPro')[0] //动态进度条
      const musicWidth = document.getElementsByClassName('progress')[0].offsetWidth // 底部进度条总宽
      musicBar.addEventListener('touchmove', (event) => {
        const events = event.targetTouches[0].pageX - musicBar.getBoundingClientRect().left// 获得触摸拖动的距离
        if (events <= 0) events = 0
        if (events <= musicWidth) {
          proWidth.value = `${(events / musicWidth) * 100}%` // 计算进度条所在比例宽度
          audio.value.pause()  //拖动时停止播放
        }
      })
      musicBar.addEventListener('touchend', () => {
        const touwidth = (musicBar.offsetWidth / musicWidth) // 计算进度条所在比例
        audio.value.currentTime = audio.value.duration * touwidth // 通过所在比例赋值给音频应在的播放时

        // 改变播放状态，进行播放
        audio.value.play()

        if (touwidth < musicWidth) {
          audio.value.play() // 根据播放时间开始播放

        } else if (touwidth >= musicWidth) {
          audio.value.pause() // 触摸拖动时停止播放
        }
      })
    })
    onBeforeUnmount(() => {
      clearInterval(timer)
    })


    // 设置歌词滚动
    watch(currentTime, () => {
      proWidth.value = (currentTime.value / audio.value.duration) * 100 + "%"
      if (showLyric.value) {
        try {
          let offset = document.getElementsByClassName('active')[0].offsetTop
          if (offset / 7.5 >= 4) {
            document.getElementsByClassName('playLyric')[0].scrollTop = offset - 150
          }
        } catch (e) {
          console.log(e)
        }
      }

    })

    //获取歌词
    let lyric = inject('lyric')
    // 歌词处于上一句结束且当前为结束时，返回true
    function getLyricState(nowTime, nextTime) {
      return currentTime.value > nowTime && currentTime.value < nextTime
    }

    const showpopList = ref(false);

    //跳转到评论区
    const router = useRouter()
    const toComment = function () {
      if (!playlist.value.length) return
      const commentInfo = {
        type: "single",
        id: playlist.value[playIndex.value].id,
        coverImgUrl: playlist.value[playIndex.value].al.picUrl,
        auname: playlist.value[playIndex.value].arts,
        name: playlist.value[playIndex.value].name
      }
      router.push({
        name: "comments",
        params: {
          info: JSON.stringify(commentInfo)
        }
      })
    }

    function formatCommentCount(count) {
      if (count >= 100000) return "10w+"
      else if (count >= 10000) return "1w+"
      else if (count > 1000) return "999+"
      else return count
    }
    return {
      playIndex, playlist, isPlaying, needle, AnimationPlayState, currentTime,
      strDuration, strCurrentTime, lyric, showLyric, getLyricState, proWidth,
      showpopList, toComment, totalComments, formatCommentCount
    }
  }
}
</script>

<style lang="less">
.playMusicDetail {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  // display: none;
  background-color: #000;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(40px);
    transform: scale(1.2);
    z-index: -1;

    .warp {
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .playTop {
    display: flex;
    align-items: center;
    height: 1.2rem;

    svg {
      flex: 0.12;
      width: 0.44rem;
      height: 0.44rem;
    }

    .textInfo {
      flex: 0.8;
      display: flex;
      flex-direction: column;

      >span {
        width: 5.5rem;
        color: white;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .au>span {
        width: 5.5rem;
        color: #ccc;
        font-size: 0.15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .playContent {
    height: 8.5rem;
    position: relative;

    .needle {
      width: 2rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-25%);
      transform: rotate(-25deg);
      transform-origin: 0.2rem 0.2rem;
      transition: all 1s;
      z-index: 3;
    }

    .disc {
      position: absolute;
      top: 2rem;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 5.9rem;
      border-radius: 50%;
      animation: disc_roate 13s linear 0.2s infinite;

      img {
        width: 5.9rem;
        height: 5.9rem;
        border-radius: 50%;
        position: absolute;
      }

      img:first-child {
        z-index: 2;
      }

      img:last-child {
        z-index: 1;
        transform: scale(0.75);
      }
    }

    .playLyric {
      width: 100%;
      height: 6rem;
      position: relative;
      left: 0;
      top: 2rem;
      z-index: 10000;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: scroll;
      padding: 0.2rem 0 0.4rem;

      .scroll-lrc {
        width: 7.1rem;
        position: absolute;
        left: calc(50% - 3.55rem);
        overflow: hidden;

        p {
          width: 7.5rem;
          text-align: center;
          color: rgb(230, 228, 228);
          font-size: 0.25rem;
          margin-bottom: 0.1rem;
        }

        p.active {
          color: #fff;
          font-size: 0.45rem;
        }
      }
    }

  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;

    .playOptions {
      display: flex;
      justify-content: space-around;
      padding: 0.2rem 0.5rem;

      svg {
        width: 0.5rem;
        height: 0.5rem;
      }

      .comment {
        position: absolute;
        bottom: 0;
        right: 0px;
        transform: translateX(65%);
        font-size: 0.13rem;
        color: white;
        z-index: 1;
      }
    }

    .playProgress {
      padding: 0.3rem 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .progress {
        flex: 0.78;
        height: 0.05rem;
        background-color: rgb(136, 135, 135);
        position: relative;
        border-radius: 1rem;

        span {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          background-color: white;
          border-radius: 1rem;
          height: 0.05rem;
        }
      }

      span {
        flex: 0.1;
        color: #eeedec;
        font-size: 0.25rem;
      }
    }

    .playControl {
      padding: 0.2rem 0.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      svg:not(:nth-child(3)) {
        width: 0.5rem;
        height: 0.5rem;
      }

      svg:nth-child(3) {
        width: 1rem;
        height: 1rem;
      }
    }
  }

}



@keyframes disc_roate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>