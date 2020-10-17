<template>
  <div>
    <router-view></router-view>
    <footer>
      <router-link
        v-for="item in pic"
        :key="item.path"
        :to="item.path"
        active-class="sel"
      >
        <img :src="$route.path == item.path ? item.new : item.old" alt="" />
        <p>{{ item.txt }}</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
import home from "../assets/css/img/tab_home_hig.png";
import homes from "../assets/css/img/tab_home_nor.png";
import mine from "../assets/css/img/tab_me_hig.png";
import mines from "../assets/css/img/tab_me_nor.png";
import order from "../assets/css/img/tab_menu_hig.png";
import orders from "../assets/css/img/tab_menu_nor.png";
import shop from "../assets/css/img/tab_shopping_hig.png";
import shops from "../assets/css/img/tab_shopping_nor.png";
export default {
  data() {
    return {
      home,
      homes,
      mine,
      mines,
      shop,
      shops,
      order,
      orders,
      pic: [
        {
          txt: "首页",
          path: "/index/home",
          old: homes,
          new: home,
        },
        {
          txt: "分类",
          path: "/index/detail",
          old: orders,
          new: order,
        },
        {
          txt: "购物车",
          path: "/index/shop",
          old: shops,
          new: shop,
        },
        {
          txt: "我的",
          path: "/index/mine",
          old: mines,
          new: mine,
        },
      ],
    };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
}
footer img {
  width: 0.3rem;
  height: 0.3rem;
}
footer p {
  font-size: 0.2rem;
  color: black;
}
.sel p {
  color: #ff9a00;
}
</style>