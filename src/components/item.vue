<template>
  <router-link
    :to="{ path: '/detail', query: { mid: item.id, title: item.title, pic_url: item.pic_url } }"
  >
    <li class="item">
      <div class="picture">
        <img width="100px" height="120px" class="images" :src="item.pic_url" />
      </div>

      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>
    </li>
  </router-link>
</template>
<script>
export default {
  props: ['item'],
  data() {
    return {};
  },
};
</script>
<style type="text/css">
@import '../assets/css/item.css';
</style>
