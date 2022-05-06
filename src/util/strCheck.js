// 判断是否全为空字符
export function isEmptyStr(str){
  for(let item of str){
    if(item != " " && item != "") return false
  }
  return true
}

//去掉首尾空格
export function trimStr(str){ 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}