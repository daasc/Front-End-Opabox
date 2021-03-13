import api from '../api';

async function breaks(params) {
  try {
    const response = await api.get('/interlace', {
      params: {
        intervaloA: params.intervaloA,
        intervaloB: params.intervaloB,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
export default {
  breaks,
};
