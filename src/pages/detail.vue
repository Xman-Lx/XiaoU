<template>
  <div>
    <v-header></v-header>
    <div class="left">
      <ul>
        <li
          class="left-li"
          id="q"
          v-for="(item, index) in tree"
          :key="item.id"
          @click="list(index)"
        >
          {{ item.catename }}
        </li>
      </ul>
      <ul>
        <li
          class="right-li"
          v-for="item in rightlist"
          :key="item.id"
          @click="fendetail(item.id)"
        >
          <v-f :d="item.catename" v-if="false"></v-f>
          <img :src="'http://localhost:3000' + item.img" alt="" />
          <p>{{ item.catename }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqFen, reqFengoods } from "../unitl/index";
import vF from "./fendetail";
export default {
  data() {
    return {
      tree: {},
      rightlist: [],
    };
  },
  mounted() {
    reqFen().then((res) => {
      this.tree = res.data.list;
    });

    reqFen().then((res) => {
      var sel = document.getElementsByTagName("li")[0];

      this.rightlist = res.data.list[0].children;
      sel.className = "sel";
      console.log(res);
    });
  },
  components: {
    vF,
  },
  methods: {
    fendetail(id) {
      this.$router.push("/fendetail?id=" + id);
    },
    list(id) {
      for (let i = 0; i < this.tree.length; i++) {
        var sel = document.getElementsByTagName("li")[i];
        sel.className = "left-li";
      }
      var sel = document.getElementsByTagName("li")[id];
      reqFen().then((res) => {
        this.rightlist = res.data.list[id].children;
        sel.className = "sel";
        console.log(res);
      });
      console.log(this.rightlist);
    },
  },
};
</script>

<style scoped>
.left-li {
  width: 2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-left: 0.05rem solid white;
}
.right-li {
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: 0.03rem solid #1d84a7;
  display: flex;
  flex-direction: column;
}
.right-li img {
  width: 2rem;
  height: 1.5rem;
  border-radius: 0.3rem 0.3rem 0 0;
}
.right-li p {
  flex: 1;
  background-color: #1d84a7;
  color: white;
  text-align: center;
  border-radius: 0 0 0.25rem 0.24rem;
}
.right-li {
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
.left {
  display: flex;
}
.sel {
  border-left: 0.05rem solid #1d84a7;
  color: #ff9900;
  line-height: 0.8rem;
  text-align: center;
}
</style>