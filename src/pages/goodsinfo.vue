<template>
  <div>
    <v-header></v-header>
    <v-back></v-back>
    <img class="img1" :src="'http://localhost:3000' + list.img" alt="" />
    <div class="text">
      <div class="left">
        <p class="p1">{{ list.goodsname }}</p>
        <p class="p2" v-if="list.price">
          {{ list.price | filterprice }}
          <span v-if="list.ishot == 1">热卖</span>
          <span v-if="list.isnew == 1">新品</span>
        </p>
        <p class="p3" v-if="list.market_price">
          {{ list.market_price | filterprice }}
        </p>
      </div>

      <p class="p4">
        <img src="..\assets\css\img\keep.png" alt="" />
        <span>收藏</span>
      </p>
    </div>
    <p v-html="list.description" class="ss"></p>
    <div class="bottom">
      <div><button class="btn1" @click="add()">加入购物车</button></div>
    </div>
    <div class="pic" v-if="isshow">
      <div class="hh" @click="show()"></div>
      <div class="picker">
        <img class="img2" :src="'http://localhost:3000' + list.img" alt="" />
        <p class="botp1">{{ list.goodsname }}</p>

        <p class="botp2">{{ list.specsname }}</p>
        <p
          v-for="(item, index) in size"
          :key="index"
          class="litbox"
          @click="sizebox(index)"
        >
          {{ size[index] }}
        </p>
        <button class="btn" @click="send()">加入购物车</button>
      </div>
    </div>
    <div class="alert" v-if="isalert">添加成功</div>
  </div>
</template>

<script>
import { reqGoodsinfo, reqShopadd } from "../unitl/index";
export default {
  data() {
    return {
      list: {},
      size: {},
      isshow: false,
      isalert: false,
    };
  },
  methods: {
    sizebox(index) {
      document.getElementsByClassName("litbox")[index].className = "selsize";
    },
    add() {
      this.isshow = true;
    },
    show() {
      this.isshow = false;
    },
    show1() {
      this.isshow = true;
    },
    send() {
      let id = this.$route.query.id;
      let uid = localStorage.getItem("uid");
      reqShopadd(uid, id, 1).then((res) => {});

      setInterval(() => {
        this.isalert = false;
      }, 2000);
      this.isshow = false;
      this.isalert = true;
    },
  },
  mounted() {
    var id = this.$route.query.id;
    reqGoodsinfo(id).then((res) => {
      this.list = res.data.list[0];
      this.size = JSON.parse(res.data.list[0].specsattr);
      // localStorage.setItem("uid", res.data.list[0].id);
      console.log(res);
    });
  },
};
</script>

<style scoped>
.ss {
  padding-bottom: 1rem;
}
.litbox {
  float: left;
  border: 1px solid #666666;
  color: #666666;
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  margin-left: 0.2rem;
}
.litboxsel {
  color: #ffa723;
  border: #ffa723;
}
.alert {
  width: 2rem;
  height: 0.7rem;
  position: fixed;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.7rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.img1 {
  width: 100%;
  height: 3rem;
}
.text p {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.p1 {
  font-size: 0.4rem;
}
.p2,
.p3,
.p2 span {
  font-size: 0.25rem;
}
.p2 {
  color: #ff0000;
}
.p2 span {
  border: 1px solid #ffd784;
  color: #ffd784;
  margin-left: 0.2rem;
}
.p3 {
  color: #666666;
  text-decoration: line-through;
}
.p4 span {
  font-size: 0.1rem;
}
.p4 {
  text-align: center;
  float: right;
}
.p4 span {
  display: block;
}
.left {
  float: left;
}
.img2 {
  width: 2rem;
  height: 2rem;
}
.bottom {
  width: 100%;
  height: 1rem;
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
}
.btn1 {
  border: none;
  float: right;
  background-color: #ff9900;
  color: white;
  height: 1rem;
  width: 3rem;
}
.btn {
  border: none;
  background-color: #ff9900;
  color: white;
  height: 1rem;
  width: 3rem;
  margin-left: 23%;
  text-align: center;
}
.pic {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
}
.picker {
  width: 100%;
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
}
.botp1 {
  float: right;
  font-size: 0.4rem;
  margin-right: 1rem;
}
.picker p {
  margin-top: 0.2rem;
}
.btn {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
.botp2 {
  font-weight: bold;
  font-size: 0.35rem;
}
.selsize {
  float: left;
  border: 1px solid #ff9900;
  color: #ffa723;
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  margin-left: 0.2rem;
}
.hh {
  flex: 1;
}
</style>