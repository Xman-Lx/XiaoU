<template>
  <div>
    <v-header></v-header>
    <div class="menu" v-if="this.shoplist">
      <p class="p1" @click="all()">
        <img :src="this.allall == 1 ? allold : allnew" alt="" id="all" />
        <br />
        全选
      </p>
      <p class="p2" @click="write()">
        <img :src="delold" alt="" id="alldel" />
        <br />
        编辑
      </p>
      <p class="p3">
        <span>合计:{{ allprice | filterprice }} </span>
        <br />
        <span class="sp1">(不含运费)</span>
      </p>
      <p><button class="suan">去结算</button></p>
    </div>
    <div v-else>暂无数据</div>

    <div class="data">
      <ul>
        <li v-for="(item, index) in shoplist" :key="index">
          <p class="data-li">
            <img src="..\assets\css\img\store.png" alt="" />
            <span>杭州保税区仓</span>
          </p>

          <div class="hua">
            <div class="goodlist" id="goodlist">
              <p @click="one(index)">
                <img
                  :src="item.status == 1 ? allold : allnew"
                  alt=""
                  class="one"
                />
              </p>
              <p>
                <img
                  class="im"
                  :src="'http://localhost:3000' + item.img"
                  alt=""
                />
              </p>
              <p class="txt">
                <span class="ssp">{{ item.goodsname }}</span
                ><br />
                <span class="ssp1"
                  ><button class="jian" @click="jian(index, item.id)">-</button
                  >&nbsp;&nbsp;{{ item.num }}&nbsp;&nbsp;<button
                    class="jia"
                    @click="jia(index, item.id)"
                  >
                    +
                  </button></span
                ><br />
                <span class="alpic" v-if="item.num * item.price"
                  >总价:{{ (item.num * item.price) | filterprice }}</span
                >
              </p>
              <p class="pri" v-if="item.price">
                ￥{{ item.price | filterprice }}
              </p>
            </div>
            <div class="del" v-if="isdel" @click="del(item.id)">删除</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="alert" v-if="isjian">不能再减了亲</div>
  </div>
</template>

<script>
import allold from "../assets/css/img/radio_nor.png";
import allnew from "../assets/css/img/radio_hig.png";
import delold from "../assets/css/img/editor_nor.png";
import delnew from "../assets/css/img/editor_hig.png";
import { reqShoplist, reqShopdel, reqShopchange } from "../unitl/index";
export default {
  data() {
    return {
      shoplist: [],
      delnew,
      delold,
      allnew,
      allold,
      isjian: false,
      isdata: false,
      // allprice: 0.0,
      isdel: false,
      allall: 1,

      typejian: 1,
      typejia: 2,
    };
  },
  mounted() {
    var uid = localStorage.getItem("uid");
    reqShoplist(uid).then((res) => {
      console.log(res, "购物车数据");
      this.shoplist = res.data.list;
    });
  },
  computed: {
    allprice() {
      var sum = 0;
      this.shoplist.forEach((item) => {
        if (item.status == 2) {
          sum += item.num * item.price;
        }
      });
      return sum;
    },
  },
  methods: {
    del(id) {
      var uid = localStorage.getItem("uid");
      reqShopdel(id).then((res) => {
        reqShoplist(uid).then((res) => {
          this.shoplist = res.data.list;
        });
      });
    },
    all() {
      if (this.allall == 1) {
        this.allall = 2;
        document.getElementById("all").src = allnew;
      } else {
        this.allall = 1;
        document.getElementById("all").src = allold;
      }
      this.shoplist.map((item) => {
        item.status = this.allall;
      });
    },
    one(index) {
      if (this.shoplist[index].status == 1) {
        this.shoplist[index].status = 2;
        document.getElementsByClassName("one")[index].src = this.allnew;
      } else {
        this.shoplist[index].status = 1;
        document.getElementsByClassName("one")[index].src = this.allold;
      }
      if (
        this.shoplist.some((item) => {
          item.status == 1;
        })
      ) {
        this.allall = 1;
      } else {
        this.allall = 2;
      }
    },
    jian(index, id) {
      if (this.shoplist[index].num < 2) {
        this.isjian = true;
        setInterval(() => {
          this.isjian = false;
        }, 1500);
        this.shoplist[index].num = 1;
      } else {
        this.shoplist[index].num--;
      }
    },
    jia(index, id) {
      this.shoplist[index].num++;
    },
    write() {
      if (this.isdel == true) {
        for (let i in this.shoplist) {
          document.getElementsByClassName("goodlist")[i].style.marginLeft =
            "0rem";
        }
        document.getElementById("alldel").src = this.delold;
      } else {
        for (let i in this.shoplist) {
          document.getElementsByClassName("goodlist")[i].style.marginLeft =
            "-1rem";
        }
        document.getElementById("alldel").src = this.delnew;
      }
      this.isdel = !this.isdel;
    },
  },
};
</script>

<style scoped>
.alert {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 2.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0.2rem;
}
.ssp1 {
  display: block;
  width: 2rem;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  border-left: none;
  border-right: none;
}
.data li {
  width: 100%;
}
.hua {
  display: flex;
  overflow: hidden;
}
.del {
  width: 1rem;
  height: 1.9rem;
  background-color: #ff9900;
  color: white;
  line-height: 1.5rem;
  text-align: center;
  float: right;
}

.ssp {
  font-size: 0.25rem;
  margin-top: 0rem;
}
.txt {
  width: 2rem;
  display: flex;
  flex-direction: column;
}
.goodlist .im {
  width: 1.6rem;
  height: 1.9rem;
}
.goodlist button {
  width: 0.6rem;
  height: 0.4rem;
  background-color: #fff;
  border: none;
  border: 1px solid #666666;
  border-top: none;
  border-bottom: none;
}
.goodlist {
  width: 100vw;
  overflow: hidden;
  display: flex;
}
.goodlist p {
  margin-left: 0.2rem;
}
.data-li {
  width: 100%;
  height: 0.8rem;

  line-height: 0.8rem;
}
.data-li img {
  margin-left: 0.2rem;
}
.data-li span {
  color: gray;
  font-size: 0.25rem;
  margin-left: 0.2rem;
}
.menu {
  display: flex;
  /* width: 100%; */
  height: 1rem;
  position: fixed;
  left: 0;
  background-color: white;
  bottom: 1rem;
  align-items: center;
}
.sp1 {
  font-size: 0.2rem;
  color: gray;
}
.p1,
.p2,
.p3 {
  margin-left: 0.3rem;
  text-align: center;
  font-size: 0.25rem;
}
.p3 {
  text-align: left;
}
.suan {
  position: fixed;
  right: 0;
  bottom: 1rem;
  width: 2rem;
  height: 1rem;
  border: none;
  color: white;
  background-color: #ff9900;
}
</style>