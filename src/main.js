import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'vant/lib/index.css'
// import {Swipe, SwipeItem , Tab, Tabs, Progress, Form, Field, 
//   CellGroup,Dialog, List, Popup, Toast, SwipeCell, Button, Cell, Lazyload,
//   Overlay,Skeleton, PullRefresh, Badge} from 'vant'

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
  // .use(Swipe)
  // .use(SwipeItem)
  // .use(Tab)
  // .use(Tabs)
  // .use(Progress)
  // .use(Form)
  // .use(Field)
  // .use(CellGroup)
  // .use(Dialog)
  // .use(List)
  // .use(Popup)
  // .use(Toast)
  // .use(SwipeCell)
  // .use(Button)
  // .use(Cell)
  .use(vant.Lazyload,{
    HomeView:true,
    highQualitySongsRec:true,
    newMusic:true,
    musicSwiperItem:true,
    iconList:true,
    musicListTop:true,
    musicList:true
  })
  // .use(Overlay)
  // .use(Skeleton)
  // .use(PullRefresh)
  // .use(Badge)

app.mount('#app')
