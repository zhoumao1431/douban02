import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msgs_list: [
      {
        mid: 1,
        title: '铁道英雄',
        pic_url: require('../assets/images/1.jpg'),
      },
      {
        mid: 2,
        title: '曾今相爱的我们',
        pic_url: require('../assets/images/2.jpg'),
      },
      {
        mid: 3,
        title: '荣耀时刻',
        pic_url: require('../assets/images/3.jpg'),
      },
      {
        mid: 4,
        title: '误杀2',
        pic_url: require('../assets/images/4.jpg'),
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
