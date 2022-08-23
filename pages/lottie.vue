<template>
  <div class="lottie pt-5">
    <div class="lottie__wrap">
      <h1 class="lottie__title">
        Анимация GreenSock
      </h1>
      <div class="lottie__part">
        <div class="col">
          <lottie
            :width="840"
            :height="467"
            :options="lottieOptions"
            @animCreated="handleAnimation"
          />
          <div class="row lottie__inner pt-5">
            <button
              class="btn btn-danger"
              @click="stop"
            >
              stop
            </button>
            <button
              class="btn btn-success"
              @click="play"
            >
              play
            </button>
            <button
              class="btn btn-warning"
              @click="pause"
            >
              pause
            </button>
          </div>
        </div>
      </div>
      <Arrow
        :is-left="true"
        page="vue"
        class="lottie__arrow-left"
      />
      <Arrow
        page="gsap"
        class="lottie__arrow-right"
      />
    </div>
  </div>
</template>
<script>
import Arrow from '@/components/arrow';
import lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '~/lottie/lottie-anim.json';

export default {
  name: 'Lottie',
  components: {
    Arrow,
    lottie,
  },
  data() {
    return {
      lottieOptions: {
        animationData: animationData.default,
        loop: true,
      },
      anim: null,
    };
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    stop() {
      this.anim.stop();
    },
    play() {
      this.anim.play();
    },
    pause() {
      this.anim.pause();
    },
  },
};
</script>

<style lang="scss" scoped>
.lottie {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 100%;
  height: 100vh;
  &__part {
    display: flex;
    justify-content: space-evenly;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__arrow-right {
    position: fixed;
    top: 50%;
    right: 100px;
  }
  &__arrow-left {
    position: fixed;
    top: 50%;
    left: 100px;
  }
  &__col {
    display: flex;
    flex-direction: column;
  }
  &__inner {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    justify-content: space-evenly;
  }
}
</style>
