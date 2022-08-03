<template>
  <div class="comment">
    <!-- 导航栏 -->
    <nav>
      <svg @click="router.back()" t="1659425084199" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2770" width="48" height="48">
        <path
          d="M729.972918 903.68375l-393.880789-391.691937 393.880789-391.68068c10.270924-10.214642 11.294231-25.719778 2.334161-34.666544-9.002025-8.925277-24.607444-7.902994-34.877345 2.322905L291.499515 491.617787c-5.846148 5.824659-8.601912 13.382798-8.270361 20.463054-0.267083 7.03523 2.468215 14.525831 8.314363 20.306488l405.885194 403.662573c10.269901 10.180873 25.919323 11.248182 34.877345 2.312672C741.267149 929.423995 740.243843 913.908626 729.972918 903.68375z"
          p-id="2771" fill="#2c2c2c"></path>
      </svg>
      <span>评论(xxxx)</span>
      <svg t="1659425218355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="8922" width="48" height="48">
        <path
          d="M512 64v64C299.936 128 128 299.936 128 512s171.936 384 384 384c208.8 0 378.688-166.688 383.872-374.24L896 512h64c0 247.424-200.576 448-448 448S64 759.424 64 512C64 267.904 259.2 69.44 501.984 64.096L512 64z m380.8-3.2a32 32 0 0 1 31.776 28.256l0.192 3.712v224a32 32 0 0 1-63.776 3.744L860.8 316.8V176.224L438.624 598.432l-45.248-45.28L821.76 124.736 668.8 124.8a32 32 0 0 1-31.808-28.256L636.8 92.8a32 32 0 0 1 28.288-31.776l3.712-0.224h224z"
          p-id="8923" fill="#2c2c2c"></path>
      </svg>
    </nav>
    <!-- header， 歌单或者单曲 -->
    <commentHeader v-if="info.id" :type="info.type" :info="info"></commentHeader>

    <!-- 评论列表 -->
    <commentList v-if="info.id" :id="info.id"></commentList>

    <!-- 输入框 -->
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router"
import commentHeader from "../components/comment/header.vue"
import commentList from "../components/comment/list.vue"
export default {
  name: "CommentsSession",
  components: { commentHeader, commentList },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const info = JSON.parse(route.params.info).data
    console.log(info)
    return {
      router, info
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  z-index: 10;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.3rem 0.22rem 0.1rem 0.22rem;
  svg {
    width: 0.45rem;
    height: 0.45rem;
  }

  span {
    font-size: 0.32rem;
  }
}
</style>