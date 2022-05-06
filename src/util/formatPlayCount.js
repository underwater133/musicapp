
// 格式化播放量
export function formatCount(num){
  let formatCount = num;
  if(num >= 100000000){
    formatCount = (num/100000000).toFixed(1) + '亿'
  }
  else if(num >= 10000){
    formatCount = (num/10000).toFixed(1) + '万'
  }
  return formatCount;
}


