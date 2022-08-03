<template>
  <div>
    <!-- 歌单 -->
    <div v-if="type == 'list' && info" class="list">
      <img :src="info.coverImgUrl" alt="">
      <div class="info">
        <p>
          <span>歌单 </span>
          <span> {{ info.name }}</span>
        </p>
        <p>
          <span>by </span>
          <span> {{ info.auname }}</span>
        </p>
      </div>
      <svg t="1659426153422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="10007" width="48" height="48">
        <path
          d="M289.301454 938.361551c8.958022 8.93551 24.607444 7.868201 34.877345-2.312672l405.886217-403.662573c5.846148-5.780657 8.581446-13.271258 8.314363-20.306488 0.331551-7.080256-2.423189-14.637372-8.270361-20.463054L324.178799 87.966471c-10.269901-10.225899-25.875321-11.248182-34.877345-2.322905-8.960069 8.946766-7.936763 24.451902 2.334161 34.666544l393.880789 391.68068L291.635615 903.68375C281.364691 913.908626 280.341385 929.423995 289.301454 938.361551z"
          p-id="10008" fill="#bfbfbf"></path>
      </svg>
    </div>

    <!-- 单曲 -->
    <div v-if="type == 'single' && info" class="single">
      <img :src="info.coverImgUrl" alt="">
      <p>
        <span>{{ info.name }}</span>
        <span> - {{ info.auname }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "commentHeader",
  props: ["type", "info"],
  setup(props) {

  }
}
</script>
<style lang="less" scoped>
.list,
.single {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.15rem 0.22rem;
  margin-bottom: 7px;
}

.list {
  img {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    margin-left: 0.1rem;

    p:nth-child(1) {
      
      font-size: 0.27rem;
      max-width: 5rem;
      white-space: nowrap; //禁止换行
      overflow: hidden;
      text-overflow: ellipsis;

      span:nth-child(1) {
        color: orangered;
        border: 1px solid orangered;
        border-radius: 5px;
        padding: 0.5px;
        font-size: 0.15rem;
      }

      margin-bottom: 0.1rem;
    }

    p:nth-child(2) {
      color: rgb(47, 93, 177);
      font-size: 0.25rem;

      span:first-child {
        // font-size: 0.2rem;
        color: #bfbfbf;
      }
    }
  }

  svg {
    width: 0.3rem;
    height: 0.3rem;
  }
}

.single {
  img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
  }

  p {
    flex: 1;
    font-size: 0.27rem;
    margin-left: 0.1rem;

    span:last-child {
      color: #bfbfbf;
      font-size: 0.25rem;
    }
  }
}
</style>