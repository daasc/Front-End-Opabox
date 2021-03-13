<template>
  <div class="card" v-on:click="active">
    <slot name="header"></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    teste: {
      type: String,
      require: true,
    },
  },
  methods: {
    active() {
      if (this.teste === 'interlace') {
        this.$parent.ativarInterlace();
      } else {
        this.$parent.ativarOrdenaLista();
      }
    },
  },
};
</script>
<style lang="scss">
.card {
  width: 300px;
  min-height: 60px;
  font-family: "Bold";
  background: #373435;
  cursor: pointer;
  text-align: center;
  margin-bottom: 10px;
  color: white;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  h2 {
    font-size: 1.5rem;
    padding: 15px;
  }
}

</style>
