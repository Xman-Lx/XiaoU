<template>
  <div>
    <header>{{ d }}</header>
    <v-back></v-back>
    <ul>
      <li v-for="item in list" :key="item.id" class="i">
        <div><img :src="'http://localhost:3000' + item.img" alt="" /></div>
        &nbsp;&nbsp;
        <div>
          <p>{{ item.goodsname }}</p>
          <p class="p2">
            <span class="sp1" v-if="item.price"
              >￥{{ item.price | filterprice }}</span
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="sp2" v-if="item.market_price"
              >￥{{ item.market_price | filterprice }}</span
            >
          </p>
          <p class="p3"><button @click="shop(item.id)">立即抢购</button></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqFengoods } from "../unitl/index";
export default {
  props: ["d"],
  data() {
    return {
      list: [],
    };
  },
  methods: {
    shop(id) {
      this.$router.push("/goodsinfo?id=" + id);
    },
  },
  mounted() {
    var id = this.$route.query.id;
    reqFengoods(id).then((res) => {
      this.list = res.data.list;
    });
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
img {
  width: 2rem;
  height: 2rem;
}
.i {
  display: flex;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}
.p2,
.p3 {
  margin-top: 0.3rem;
}
.sp1 {
  font-size: 0.35rem;
  color: #ff9900;
}
.sp2 {
  font-size: 0.2rem;
  color: #666666;
  text-decoration: line-through;
}
button {
  border: none;
  background-color: #ff9900;
  color: white;
  width: 1.5rem;
  height: 0.6rem;
  font-size: 0.25rem;
  border-radius: 0.15rem;
}
</style>