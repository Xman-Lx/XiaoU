import axios from "axios";
import Vue from "vue";
import qs from "qs";
Vue.prototype.$axios = axios;

var baseurl = "/api";
axios.interceptors.request.use(config => {
  if (config.url != baseurl + "/api/login") {
    config.headers.authorization = localStorage.getItem("token");
  }
  return config;
});

axios.interceptors.response.use(res => {
  return res;
});

//注册
export const reqRegister = params => {
  return axios({
    url: baseurl + "/api/register",
    method: "post",
    data: qs.stringify(params)
  });
};
//登录
export const reqLogin = params => {
  return axios({
    url: baseurl + "/api/login",
    method: "post",
    data: qs.stringify(params)
  });
};
//首页轮播
export const reqLunbo = () => {
  return axios({
    url: baseurl + "/api/getbanner"
  });
};
//秒杀信息
export const reqMiao = () => {
  return axios({
    url: baseurl + "/api/getseckill"
  });
};
//首页商品
export const reqGoods = () => {
  return axios({
    url: baseurl + "/api/getindexgoods"
  });
};
//首页分类信息
export const reqIfengoods = () => {
  return axios({
    url: baseurl + "/api/getcate"
  });
};
//分类
export const reqFen = () => {
  return axios({
    url: baseurl + "/api/getcatetree"
  });
};

//分类商品
export const reqFengoods = fid => {
  return axios({
    url: baseurl + "/api/getgoods?fid=" + fid
  });
};
//商品信息

export const reqGoodsinfo = id => {
  return axios({
    url: baseurl + "/api/getgoodsinfo?id=" + id
  });
};

//购物车列表
export const reqShoplist = uid => {
  return axios({
    url: baseurl + "/api/cartlist?uid=" + uid
  });
};
//购物车添加
export const reqShopadd = (uid, goodsid, num) => {
  return axios({
    url: baseurl + "/api/cartadd",
    method: "post",
    data: {
      uid,
      goodsid,
      num
    }
  });
};
//购物车修改
export const reqShopchange = (id, type) => {
  return axios({
    url: baseurl + "/api/cartedit",
    method: "post",
    data: {
      id,
      type
    }
  });
};
//购物车删除
export const reqShopdel = id => {
  return axios({
    url: baseurl + "/api/cartdelete",
    method: "post",
    data: {
      id
    }
  });
};
