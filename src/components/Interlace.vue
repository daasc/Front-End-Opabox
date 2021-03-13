<template>
  <div class="interlace">
    <h3 class="interlace__titulo">Interlace</h3>
    <form action="">
      <label for="intervaloA">Intervalor A:</label>
      <the-mask
        id="intervaloA"
        class="input_intervalor"
        v-model="valorIntervaloA"
        :mask="['##-##']"
      />
      <label for="intervaloB">Intervalor B:</label>
      <the-mask
        id="intervaloB"
        class="input_intervalor"
        v-model="valorIntervaloB"
        :mask="['##-##']"
      />
      <button
        type="submit"
        class="btn log_into"
        @click.prevent="verificar()"
      >Verificar</button>
    </form>
    <div v-if="mostrarResultado">
      <hr>
      <h3 class="interlace__titulo">Resultado</h3>
      O intervalor é: {{ result }}
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Interlace',
  data() {
    return {
      valorIntervaloA: '',
      valorIntervaloB: '',
      mostrarResultado: false,
      query: {
        intervaloA: [],
        intervaloB: [],
      },
    };
  },
  computed: mapState({
    result: (state) => state.interlace.result,
  }),
  methods: {
    async verificar() {
      try {
        this.query.intervaloA.push(this.valorIntervaloA.slice(0, 2));
        this.query.intervaloA.push(this.valorIntervaloA.slice(2, 4));
        this.query.intervaloB.push(this.valorIntervaloB.slice(0, 2));
        this.query.intervaloB.push(this.valorIntervaloB.slice(2, 4));
        await this.$store.dispatch('interlace/verificar', this.query);
        this.limpar();
        this.mostrarResultado = true;
      } catch (error) {
        console.log(error);
      }
    },
    limpar() {
      this.query.intervaloA = [];
      this.query.intervaloB = [];
    },
  },
};
</script>
<style lang="scss">
.interlace {
  .interlace__titulo {
    margin-bottom: 10px;
  }
  .input_intervalor {
    margin: 5px 0;
  }
  form {
    padding: 5px;
    display: flex;
    flex-direction: column;
    .btn {
      margin-top: 5px;
    }
  }
}
</style>
