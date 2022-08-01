<template>
  <div style="width: 100%;">
    <ContentLoader width="365" height="90">
      <circle cx="40" cy="45" r="30" />
      <circle cx="110" cy="45" r="30" />
      <circle cx="180" cy="45" r="30" />
      <circle cx="250" cy="45" r="30" />
      <circle cx="320" cy="45" r="30" />

      <rect x="15" y="80" rx="7" ry="7" width="50" height="10" />
      <rect x="85" y="80" rx="7" ry="7" width="50" height="10" />
      <rect x="155" y="80" rx="7" ry="7" width="50" height="10" />
      <rect x="225" y="80" rx="7" ry="7" width="50" height="10" />
      <rect x="295" y="80" rx="7" ry="7" width="50" height="10" />
    </ContentLoader>
  </div>
</template>

<script>
import {
  ContentLoader,

} from 'vue-content-loader'
export default {
  name: 'icon-skeleton',
  components: { ContentLoader }
}
</script>

<style scoped>
</style>