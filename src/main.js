import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'vant/lib/index.css'
// import {Swipe, SwipeItem , Tab, Tabs, Progress, Form, Field, 
//   CellGroup,Dialog, List, Popup, Toast, SwipeCell, Button, Cell, Lazyload,
//   Overlay,Skeleton, PullRefresh, Badge} from 'vant'
// import 

import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.directive('img-lazy', {
  mounted(el, binding){
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }], observerElement) => {
        if(isIntersecting){
          el.src = binding.value
          //加载完图片之后停止监听
          stop()
        }
      },
    )
  }
})

app.use(store)
  .use(router)
  .use(vant)
  // .use(vant.Swipe)
  // .use(vant.SwipeItem)
  // .use(vant.Tab)
  // .use(vant.Tabs)
  // .use(vant.Progress)
  // .use(vant.Form)
  // .use(vant.Field)
  // .use(vant.CellGroup)
  // .use(vant.Dialog)
  // .use(vant.List)
  // .use(vant.Popup)
  // .use(vant.Toast)
  // .use(vant.SwipeCell)
  // .use(vant.Button)
  // .use(vant.Cell)
  .use(vant.Lazyload,{
    HomeView:true,
    highQualitySongsRec:true,
    newMusic:true,
    musicSwiperItem:true,
    iconList:true,
    musicListTop:true,
    musicList:true
  })
  // .use(vant.Overlay)
  // .use(vant.Skeleton)
  // .use(vant.PullRefresh)
  // .use(vant.Badge)

app.mount('#app')
