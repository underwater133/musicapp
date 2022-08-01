<template>
  <div style="width: 100%;">
    <ContentLoader width="350" height="170">
      <rect x="0" y="10" rx="7" ry="7" width="110" height="110" />
      <rect x="0" y="130" rx="7" ry="7" width="110" height="10" />
      <rect x="0" y="145" rx="7" ry="7" width="110" height="10" />

      <rect x="115" y="10" rx="7" ry="7" width="110" height="110" />
      <rect x="115" y="130" rx="7" ry="7" width="110" height="10" />
      <rect x="115" y="145" rx="7" ry="7" width="110" height="10" />

      <rect x="230" y="10" rx="7" ry="7" width="110" height="110" />
      <rect x="230" y="130" rx="7" ry="7" width="110" height="10" />
      <rect x="230" y="145" rx="7" ry="7" width="110" height="10" />
    </ContentLoader>
  </div>
</template>

<script>
import {
  ContentLoader,

} from 'vue-content-loader'
export default {
  name: 'musiclist-skeleton',
  components: { ContentLoader }
}
</script>

<style scoped>
</style>