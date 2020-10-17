<template>
  <div class="box">
    <div class="header">
      <p>
        <img src="..\assets\css\img\img\me_on.png" alt="" />
      </p>
      <p>个人中心</p>
      <p>
        <img src="..\assets\css\img\img\cart_on.png" alt="" />
      </p>
    </div>
    <div class="user">
      <img src="..\assets\css\img\img\me\timg.jpg" alt="" />
      <p>LikT</p>
    </div>
    <div class="love">
      <p>
        <img
          src="..\assets\css\img\keep.png"
          alt=""
        />&nbsp;&nbsp;&nbsp;我的收藏(6)
      </p>
    </div>
    <div class="order">
      <p>我的订单</p>
      <p class="p">查看订单</p>
    </div>
    <div class="icon">
      <div>
        <img src="..\assets\css\img\icon_refund.png" alt="" />
        <p>待付款</p>
      </div>
      <div>
        <img src="..\assets\css\img\icon_evaluate.png" alt="" />
        <p>订单</p>
      </div>
      <div>
        <img src="..\assets\css\img\icon_consignee.png" alt="" />
        <p>待收货</p>
      </div>
      <div>
        <img src="..\assets\css\img\icon_consignee.png" alt="" />
        <p>待评价</p>
      </div>
      <div>
        <img src="..\assets\css\img\icon_boligation.png" alt="" />
        <p>待发货</p>
      </div>
    </div>
    <div class="add">
      <p>添加收货地址</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  line-height: 0.7rem;
  width: 100%;
  height: 3.5rem;
  background-color: #ff9900;
  color: white;
}
.header p {
  font-size: 0.4rem;
}
.header img {
  width: 0.7rem;
  height: 0.7rem;
}
.user {
  text-align: center;
  margin-top: -1.2rem;
}
.p {
  color: #b6b6b6;
}
.user img {
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid white;
  border-radius: 50%;
}
.love {
  margin-left: 0.2rem;
  margin-top: 0.3rem;
}
.order {
  display: flex;
  justify-content: space-around;
  height: 1rem;
  line-height: 1rem;
  border-top: 0.15rem solid #fafafa;
  border-bottom: 1px solid black;
  margin-top: 0.3rem;
}
.icon {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 0.3rem;
}
.icon p {
  font-size: 0.2rem;
}
.add {
  height: 1.2rem;
  line-height: 1.2rem;
  margin-top: 0.3rem;
  padding-left: 0.3rem;
  border-top: 0.2rem solid #fafafa;
}
</style>