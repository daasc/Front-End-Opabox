<template>
  <div class="ordenar_lista">
    <h3 class="ordenar_lista__titulo">Ordenar Lista</h3>
    <div class="ordenar_lista__salaS">
      SalaS: {{ listas.salaS }}
    </div>
    <div class="ordenar_lista__salaN">
      SalaN: {{ listas.salaN }}
    </div>
    <hr>
    <form action="">
      <div
        class="grup-input"
        role="grup-input"
      >
        <label for="salan">SalaN:</label>
        <input
          type="number"
          id="salan"
          v-model="itemSalaN"
        >
        <span
          class="button_add"
          @click="adicionaSalaN()"
        >Adicionar</span>
      </div>
      <div
        class="grup-input"
        role="grup-input"
      >
        <label for="salas">SalaS:</label>
        <input
          type="text"
          id="salas"
          v-model="itemSalaS"
        >
        <span
          class="button_add"
          @click="adicionaSalaS()"
        >Adicionar</span>
      </div>
      <button
        type="submit"
        class="btn log_into"
        @click.prevent="orderna()"
      >Ordenar</button>
    </form>
    <div v-if="result.listas">
      <hr>
      <h3 class="ordenar_lista__titulo">Resultado:</h3>
      <div class="ordenar_lista__salaS">
        SalaS: {{ result.listas.salaS }}
      </div>
      <div class="ordenar_lista__salaN">
        SalaN: {{ result.listas.salaN }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'OrdenarLista',
  data() {
    return {
      itemSalaN: 0,
      itemSalaS: '',
      listas: {
        salaN: [],
        salaS: [],
      },
    };
  },
  computed: mapState({
    result: (state) => state.ordenarLista.listaOrdenada,
  }),
  methods: {
    adicionaSalaN() {
      this.listas.salaN.push(parseInt(this.itemSalaN, 10));
      this.limparCampoSalaN();
    },
    adicionaSalaS() {
      if (this.itemSalaS) {
        this.listas.salaS.push(this.itemSalaS);
        this.limparCampoSalaS();
      }
    },
    async orderna() {
      try {
        const data = {
          listas: this.listas,
        };
        await this.$store.dispatch('ordenarLista/ordenar', data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error,
        });
      }
    },
    limparCampoSalaS() {
      this.itemSalaS = '';
    },
    limparCampoSalaN() {
      this.itemSalaN = Number;
    },
  },
};
</script>
<style lang="scss" scoped>
.ordenar_lista {
  hr {
    border-color: #f2f2f2;
  }
  .ordenar_lista__salaS,
  .ordenar_lista__salaN {
    margin: 10px 0;
  }
  .btn {
    margin-top: 10px;
    margin-left: 10px;
  }
}
</style>
