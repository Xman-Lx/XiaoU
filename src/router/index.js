import Vue from "vue";
import Router from "vue-router";

const login = () => Promise.resolve(import("../pages/login"));
const register = () => Promise.resolve(import("../pages/register"));
const index = () => Promise.resolve(import("../pages/index"));
const home = () => Promise.resolve(import("../pages/home"));
const mine = () => Promise.resolve(import("../pages/mine"));
const detail = () => Promise.resolve(import("../pages/detail"));
const shop = () => Promise.resolve(import("../pages/shop"));
const goodsinfo = () => Promise.resolve(import("../pages/goodsinfo"));
const fendetail = () => Promise.resolve(import("../pages/fendetail"));
Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/login",
      component: login,
      name: "登录"
    },
    {
      path: "/goodsinfo",
      component: goodsinfo,
      name: "商品详情"
    },
    {
      path: "/register",
      component: register,
      name: "注册"
    },
    {
      path: "/fendetail",
      component: fendetail
    },
    {
      path: "/index",
      component: index,
      name: "首页",
      children: [
        {
          path: "home",
          component: home
        },
        {
          path: "mine",
          component: mine
        },
        {
          path: "shop",
          component: shop,
          name: "购物车"
        },
        {
          path: "detail",
          component: detail,
          name: "分类"
        },
        {
          path: "",
          redirect: "home"
        }
      ]
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
    return;
  }
  var status = localStorage.getItem("uid");
  if (status) {
    next();
    return;
  } else {
    next("/login");
  }
});

export default router;
