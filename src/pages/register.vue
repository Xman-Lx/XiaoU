<template>
  <div>
    <header>{{ $route.name }}</header>
    <v-back></v-back>
    <div class="input">
      <div class="in in1">
        手机号：<input type="text" v-model="user.phone" />
      </div>
      <div class="in in1">
        昵称：<input type="text" v-model="user.nickname" />
      </div>
      <div class="in">
        密码：<input type="password" name="" id="" v-model="user.password" />
      </div>
      <div class="button">
        <button @click="register()">注册</button>
      </div>
    </div>
    <div class="picker" v-if="isshow">注册成功</div>
  </div>
</template>

<script>
import { reqRegister } from "../unitl/index";
export default {
  data() {
    return {
      user: {
        phone: "",
        nickname: "",
        password: "",
      },
      isshow: false,
    };
  },
  methods: {
    register() {
      reqRegister(this.user).then((res) => {
        if (res.data.code == 200) {
          this.isshow = true;
          setTimeout(() => {
            this.isshow = false;
          }, 2000);

          console.log(res);
        } else {
          alert(res.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 0.8rem;
  background-color: #ff9900;
  color: white;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.35rem;
}
.input {
  width: 80%;

  margin: 1.5rem auto;
}
input {
  border: none;
  outline: none;
}
p {
  float: right;
}
.in {
  border-bottom: 1px solid #a3a3a3;
  width: 100%;
  margin: 0.4rem auto;
  /* background: olivedrab; */
  height: 1.2rem;
  line-height: 1.2rem;
}
button {
  width: 100%;
  height: 1rem;
  font-size: 0.4rem;
  border-radius: 10px;
  color: white;
  background-color: #ff9900;
  border: none;
}
.button {
  width: 100%;
  margin: 0.3rem auto;
}
.picker {
  width: 3rem;
  line-height: 0.8rem;
  text-align: center;
  color: white;
  border-radius: 10px;
  height: 0.8rem;
  background-color: rgba(0, 0, 0, 0.5);
  margin: -3.32rem auto;
  z-index: 100;
}
</style>