<template>
  <div id="home">
    <ul class="wechat-list">
      <msg-item
        v-for="msg_obj in $store.state.msgs_list"
        :item="msg_obj"
        :key="msg_obj.mid"
      ></msg-item>
    </ul>
  </div>
</template>
<script>
import msgItem from '../components/item.vue';
export default {
  components: {
    msgItem,
  },
};
</script>
