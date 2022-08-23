<template>
  <div class="default">
    <nuxt />
    <base-modal-container />
    <loader-screen />
  </div>
</template>
<script>
export default {
  name: 'default-layout',
};
</script>
<style lang="scss" scoped>
.default {
  width: 100%;
}
</style>
