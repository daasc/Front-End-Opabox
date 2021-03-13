<template>
  <div class="footer">
    <p>© 2021</p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss" scoped>
$color-primary: #373435;

.footer {
  background-color: $color-primary;
  height: 70px;
  text-align: center;
  width: 100%;
  p {
    color: white;
    font-size: 18px;
    font-family: 'Medium';
    padding: 30px 0 0 0;
  }
}
</style>
