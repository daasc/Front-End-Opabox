/* eslint-disable no-shadow */
import service from '../../service';

const state = {
  result: false,
};
const mutations = {
  SET_DATA: (state, data) => {
    state.result = data;
  },
};
const actions = {
  async verificar({ commit }, params) {
    try {
      const result = await service.interlace.breaks(params);
      commit('SET_DATA', result);
    } catch (error) {
      throw new Error(error);
    }
  },
};

const interlace = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default interlace;
