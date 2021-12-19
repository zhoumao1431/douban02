<template>
  <div class="detail-box">
    <div class="d-picture">
      <img width="200px" height="250px" :src="$route.query.pic_url" />
    </div>
    <div class="d-title">
      <h3>{{ $route.query.title }}</h3>
    </div>
    <button @click="toWebView()" class="button">观看</button>
  </div>
</template>
<style>
@import '../assets/css/detail.css';
</style>
<script>
export default {
  methods: {
    toWebView: function () {
      this.$router.push({ path: '/webView' });
    },
  },
};
</script>
