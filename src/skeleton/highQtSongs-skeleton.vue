<template>
  <div class="skeleton">
    <ContentLoader width="250" height="220">
      <!-- 图片部分 -->
      <rect x="0" y="10" rx="7" ry="7" width="55" height="55" />
      <rect x="0" y="70" rx="7" ry="7" width="55" height="55" />
      <rect x="0" y="130" rx="7" ry="7" width="55" height="55" />

      <!-- 文字信息部分 -->
      <rect x="58" y="29" rx="2" ry="2" width="60" height="16" />
      <rect x="58" y="89" rx="2" ry="2" width="60" height="16" />
      <rect x="58" y="149" rx="2" ry="2" width="60" height="16" />
    </ContentLoader>

    <ContentLoader width="60" height="220">
      <!-- 图标部分 -->
      <rect x="0" y="29" rx="5" ry="5" width="28" height="20" />
      <rect x="0" y="89" rx="5" ry="5" width="28" height="20" />
      <rect x="0" y="149" rx="5" ry="5" width="28" height="20" />
    </ContentLoader>
  </div>
</template>

<script>
import {
  ContentLoader,
} from 'vue-content-loader'
export default {
  name: 'highQtSongs-skeleton',
  components: { ContentLoader }
}
</script>

<style scoped>
.skeleton{
  display: flex;
  justify-content: space-between;
}
</style>