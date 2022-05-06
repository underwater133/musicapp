//对象转map
export function objChangeMap(obj){
  let map = new Map();
  for(let key in obj) {
     map.set(key,obj[key]);
  }
  return map;
}


//map转为json
export function mapChangeObj(map){
 let obj = {};
 for(let [k,v] of map) {
   obj[k] = v;
 }
 return obj;
}