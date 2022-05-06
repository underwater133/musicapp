<template>
  <div class="musicRank">
    <div class="rankTop">
      <span>排行榜</span>
      <span>更多></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'musicRank',
  setup(){

  }
}
</script>

<style lang="less">
.musicRank{
  padding: 0 0.2rem;
  // background-color: rgb(189, 180, 180);
  .rankTop{
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:first-child{
      font-size: 0.32rem;
      font-weight: 1000;
    }
    span:last-child{
      color: rgb(87, 84, 84);
      font-size: 0.23rem;
      border: 0.01rem solid #ccc;
      border-radius: 0.2rem;
      padding: 0.05rem 0.1rem;
    }
  }
}
</style>