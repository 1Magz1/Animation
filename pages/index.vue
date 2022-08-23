<template>
  <div class="three">
    <three />
  </div>
</template>
<script>
import three from '~/components/ThreeJS';

export default {
  name: 'three-page',
  components: {
    three,
  },
};
</script>

<style lang="scss" scoped>
.three {
  background: #000;
  overflow: hidden;
}
</style>
