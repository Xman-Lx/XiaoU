<template>
  <div>
    <p @click="back()">返回</p>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
p {
  margin-top: -0.6rem;
  margin-left: 0.2rem;
  color: white;
  font-size: 0.35rem;
}
</style>