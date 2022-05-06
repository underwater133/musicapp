function remSize(){
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth; //兼容多浏览器

  //限制宽度
  if(deviceWidth >= 750){
    deviceWidth = 750
  }
  if(deviceWidth <= 320){
    deviceWidth = 320
  }

  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
  /*
  设设计稿宽度是750px，为那么一半的宽度为375px
  100px == 1rem ， 则375px为3.75rem
  */
  document.querySelector('body').style.fontSize = 0.3 + 'rem' //相当于16px
  
}
remSize()
//调整窗口大小时调用函数
window.onresize = ()=>{remSize()}