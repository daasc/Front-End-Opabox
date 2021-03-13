<template>
  <div>
    <router-view></router-view>
    <rodape />
  </div>
</template>
<script>
export default {
  name: 'Default',
  components: {
    rodape: () => import('@/components/Footer.vue'),
  },
};
</script>
