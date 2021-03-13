import api from '../api';

async function ordenar(params) {
  try {
    const response = await api.post('/ordenaLista', params);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default {
  ordenar,
};
