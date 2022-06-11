<template>
  <div class="login">
    <img src="../assets/img/cloudMusic.png" alt="">

    <van-form @submit="onSubmit" class="myform">
      <van-cell-group inset>
        <van-field
          v-model="phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
        />  
      </van-cell-group>
      <span style="width:100%;text-align: center;">测试账号：admin,密码:123456</span>
      <button class="submit">登陆</button>
    </van-form>
    
    <div class="other">
      <span @click="show = true">忘记密码？</span>
      <span @click="router.back()">返回</span>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" >
        <div class="block">
          请到网易云音乐APP或者PC端官网进行修改密码，欸嘿~
        </div>
      </div>
    </van-overlay>

  </div>


</template>

<script>
import { ref } from 'vue';
import {loginByPhone, getUserDetail} from '../api/index'
import {useRouter} from 'vue-router'
import store from '../store/index'
// import { Dialog } from 'vant';
import md5 from 'js-md5'
import {account} from '../../account'
export default {
  name:'LoginView',
  setup(props) {
    const phone = ref('');
    const password = ref('');
    const router = useRouter()
    // 登陆
    async function onSubmit(values){
      let res
      if(values.手机号 === 'admin' && values.密码 === '123456'){
        res = await loginByPhone(account.phone, md5(account.password))
      }
      else res = await loginByPhone(values.手机号, md5(values.密码))

      // 登陆成功
      if(res.data.token){
        let userDetail = await getUserDetail(res.data.account.id)
        store.commit('setUserData',userDetail.data)
        localStorage.login = true
        localStorage.userDetail = JSON.stringify(userDetail.data)
        localStorage.cookie = encodeURIComponent(res.data.cookie)
        router.replace('/me')
      }

      // 账号或密码错误
      else{
        vant.Dialog.alert({
          message: '手机号或密码错误',
        }).then(() => {
          // on close
        });
      }
    };

    const show = ref(false)


    return {
      phone,
      password,
      onSubmit,
      router,
      show,
    };
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-color: rgb(189, 54, 4);
  // background-image: url('../assets/img/login_bg.jpg');
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  >img{
    margin-top: 3rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
  }
  .myform{
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .submit{
      margin-top: 0.5rem;
      width: 3rem;
      height: 0.7rem;
      color: rgb(189, 54, 4);
      background-color: white;
      border-radius: 20px;
      border: none;
    }
    .van-cell,.van-cell-group{
      background-color: rgb(124, 37, 5);
    }
    label{
      color: white;
    }
    input{
      color: white !important;
    }
  }
  .other{
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      font-size: 0.25rem;
      color: rgb(201, 201, 201);
      margin-bottom: 0.2rem;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 6rem;
    background-color: rgb(235, 233, 233);
    border-radius: 15px;
    text-align: center;
    
  }
}

</style>