/* eslint-disable no-shadow */
import service from '../../service';

const state = {
  listaOrdenada: {},
};
const mutations = {
  SET_DATA: (state, data) => {
    state.listaOrdenada = data;
  },
};
const actions = {
  async ordenar({ commit }, params) {
    try {
      const result = await service.ordenaLista.ordenar(params);
      commit('SET_DATA', result);
    } catch (error) {
      throw new Error(error);
    }
  },
};

const ordenarLista = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default ordenarLista;
