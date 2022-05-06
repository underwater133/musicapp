<template>
  <ContentLoader width="350" height="195">
    <rect x="10" y="15" rx="7" ry="7" width="60" height="25" />
    <!-- <rect x="290" y="15" rx="7" ry="7" width="60" height="25" /> -->
    <rect x="10" y="45" rx="7" ry="7" width="110" height="110" />
    <rect x="10" y="165" rx="7" ry="7" width="110" height="10" />
    <rect x="10" y="180" rx="7" ry="7" width="110" height="10" />

    <rect x="125" y="45" rx="7" ry="7" width="110" height="110" />
    <rect x="125" y="165" rx="7" ry="7" width="110" height="10" />
    <rect x="125" y="180" rx="7" ry="7" width="110" height="10" />

    <rect x="240" y="45" rx="7" ry="7" width="110" height="110" />
    <rect x="240" y="165" rx="7" ry="7" width="110" height="10" />
    <rect x="240" y="180" rx="7" ry="7" width="110" height="10" />
  </ContentLoader>
</template>

<script>
import {
  ContentLoader,

} from 'vue-content-loader'
export default {
  name: 'musiclist-skeleton',
  components:{ContentLoader}
}
</script>

<style scoped>
</style>