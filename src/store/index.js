import Vue from 'vue';
import Vuex from 'vuex';
import ordenarLista from './module/ordenarLista';
import interlace from './module/interlace';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ordenarLista,
    interlace,
  },
});
