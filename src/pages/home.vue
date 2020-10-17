<template>
  <div>
    <header>
      <img src="..\assets\css\img\img\home\logo.jpg" alt="" />
      <input type="text" value="输入商品" />
    </header>
    <section class="my-swiper">
      <swiper :options="swiperOption">
        <swiper-slide
          class="my-swp-silde"
          v-for="(slide, key) in swiperList"
          :key="key"
          data-id="slide.id"
        >
          <img
            class="my-swp-img"
            :src="'http://localhost:3000' + slide.img"
            alt=""
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <div class="time">
      <div>
        <img src="../assets/css/img/img/home/1.jpg" alt="" />
        <p>限时抢购</p>
      </div>
      <div>
        <img src="../assets/css/img/img/home/1.jpg" alt="" />
        <p>积分商城</p>
      </div>
      <div>
        <img src="../assets/css/img/img/home/1.jpg" alt="" />
        <p>联系我们</p>
      </div>
      <div>
        <img src="../assets/css/img/img/home/1.jpg" alt="" />
        <p>商品分类</p>
      </div>
    </div>
    <div
      class="goods"
      v-for="item in goods"
      :key="item.id"
      @click="info(item.id)"
    >
      <div>
        <img :src="'http://localhost:3000' + item.img" alt="" />
      </div>
      <div class="txt">
        <p class="p1">{{ item.goodsname }}</p>
        <p class="p2" v-if="item.price">{{ item.price | filterprice }}</p>
        <button>立即抢购</button>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { reqLunbo, reqGoods, reqGoodsinfo } from "../unitl/index";
export default {
  data() {
    return {
      swiperList: [],
      goods: [],
      goodsinfo: {},
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        initialSlide: 0,
        loop: true,
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        paginationClickable: true,
        onSlideChangeEnd: (swiper) => {
          //console.log('onSlideChangeEnd', swiper.realIndex)
        },
      },
    };
  },
  components: { Swiper, SwiperSlide },
  mounted() {
    reqLunbo().then((res) => {
      if (res.data.code == 200) {
        this.swiperList = res.data.list;
      } else {
        alert(res.data.msg);
      }
    });
    reqGoods().then((res) => {
      if (res.data.code == 200) {
        this.goods = res.data.list[1].content;
      } else {
        alert(res.data.msg);
      }
    });
  },
  methods: {
    info(id) {
      reqGoodsinfo(id).then((res) => {
        this.goodsinfo = res.data.list[0];
      });
      this.$router.push("/goodsinfo?id=" + id);
    },
  },
};
</script>

<style scoped>
header input {
  border: none;
  background-color: #cccccc;
  color: #666666;
  padding-left: 0.2rem;
  border-radius: 0.5rem;
  height: 0.5rem;
  width: 1.5rem;
  outline: none;
  font-size: 0.2rem;
}
header {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-swp-img {
  width: 100%;
  height: 3.5rem;
}
.time {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.time img {
  width: 1.3rem;
  height: 1.3rem;
}
.time p {
  font-size: 0.2rem;
  text-align: center;
}
.goods {
  display: flex;
  padding-bottom: 0.7rem;
}
.goods img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
}
.txt {
  margin-left: 0.2rem;
}
.txt button {
  border: none;
  background-color: #ff9900;
  color: white;
  width: 2rem;
  height: 0.8rem;
  border-radius: 0.2rem;
}
.p1 {
  font-size: 0.4rem;
}
.p2 {
  color: #e87038;
  padding-top: 0.2rem;
}
</style>