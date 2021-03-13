<template>
  <div class="card" v-on:click="active">
    <slot name="header"></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    nomeTeste: {
      type: String,
      require: true,
    },
  },
  methods: {
    active() {
      if (this.nomeTeste === 'interlace') {
        this.$parent.ativarInterlace();
      } else {
        this.$parent.ativarOrdenaLista();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  background: #373435;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: white;
  cursor: pointer;
  font-family: "Bold";
  min-height: 60px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  width: 300px;
  h2 {
    font-size: 1.5rem;
    padding: 15px;
  }
}

</style>
