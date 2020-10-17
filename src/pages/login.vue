<template>
  <div>
    <header>{{ $route.name }}</header>
    <router-link to="/register" class="tittle">注册</router-link>
    <div class="input">
      <div class="in in1">账号：<input type="text" v-model="user.phone" /></div>
      <div class="in">
        密码：<input type="password" v-model="user.password" />
      </div>
      <div>
        <p>忘记密码</p>
      </div>
      <div class="button">
        <button @click="login()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "../unitl/index";
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    reg() {
      this.$router.push("/register");
    },
    login() {
      // console.log(this.user);
      reqLogin(this.user).then((res) => {
        if (res.data.code == 200) {
          this.$router.push("/index");
          localStorage.setItem("uid", this.user.phone);
          localStorage.setItem("token", res.data.list.token);
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
.tittle {
  color: white;
  float: right;
  margin-top: -10%;
  margin-right: 15px;
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
  margin: 1rem auto;
}
</style>