<template>
  <nuxt-link
    class="arrow"
    :class="{'arrow_left': isLeft}"
    :to="{path: page}"
  />
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    page: {
      type: String,
      default: '',
    },
    isLeft: {
      type: Boolean,
      default: false,
    },
  },
  transition: 'default',
};
</script>

<style scoped lang="scss">
.arrow {
  width: 100px;
  height: 100px;
  position: relative;
  cursor: pointer;
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    right: 40px;
    display: block;
    width: 20px;
    height: 100px;
    transform: rotate(120deg);
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #000;
  }
  &:after {
    top: 19px;
    transform: rotate(63deg);
  }

  &_left {
    &:after,
    &:before {
      position: absolute;
      left: 40px;
      transform: rotate(63deg);
    }
    &:after {
      transform: rotate(120deg);
    }
  }
}
</style>
