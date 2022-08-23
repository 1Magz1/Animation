<template>
  <div class="page pt-5">
    <div class="page__wrap">
      <h1 class="page__title">
        Анимация GreenSock
      </h1>
      <div
        ref="container"
        class="container final"
      >
        <div class="letter F">
          F
        </div>
        <div class="letter l">
          l
        </div>
        <div class="letter i">
          i
        </div>
        <div class="letter p">
          p
        </div>
        <div class="for">
          for
        </div>
        <div class="gsap">
          GSAP
        </div>
      </div>
      <Arrow
        :is-left="true"
        page="lottie"
        class="page__arrow-left"
      />
      <Arrow
        page="three"
        class="page__arrow-right"
      />
    </div>
  </div>
</template>
<script>
import Arrow from '@/components/arrow';
import gsap from 'gsap';
import Flip from '@/plugins/flip';

export default {
  name: 'Gsap',
  components: {
    Arrow,
  },
  data() {
    return {
      layouts: ['final', 'plain', 'columns', 'grid'],
      curLayout: 0,
    };
  },
  mounted() {
    gsap.registerPlugin(Flip);

    gsap.delayedCall(1, this.nextState);
  },
  methods: {
    nextState() {
      const { container } = this.$refs;
      const state = Flip.getState('.letter, .for, .gsap');

      container.classList.remove(this.layouts[this.curLayout]);
      this.curLayout = (this.curLayout + 1) % this.layouts.length;
      container.classList.add(this.layouts[this.curLayout]);

      Flip.from(state, {
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: 'power2.inOut',
        spin: this.curLayout === 0,
        simple: true,
        onEnter: (elements, animation) => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
        onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
      });

      gsap.delayedCall(this.curLayout === 0 ? 3.5 : 1.5, this.nextState);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
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
.container {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.container.grid, .container.columns {
  align-content: stretch;
  align-items: stretch;
  flex-wrap: wrap;
}

.letter {
  text-align: center;
  color: black;
  font-size: 10vmax;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
}
.container.grid .letter {
  flex-basis: 50%;
}
.container.columns .letter {
  flex-basis: 25%;
}
.for, .gsap {
  font-size: 5vmax;
  color: white;
}
.for {
  padding: 2px 1.6vmax;
  font-weight: 300;
  display: none;
}
.gsap {
  padding: 2px 0;
  font-weight: 600;
  display: none;
}
.container.final .for, .container.final .gsap {
  display: block;
}
.F {
  background: rgba(0, 188, 212, 0.7);
}
.l {
  background: rgba(40, 150, 255, 0.7);
}
.i {
  background: rgba(153, 80, 220, 0.7);
}
.p {
  background: rgba(90, 108, 225, 0.7);
}
.container.plain .letter {
  background: transparent;
  color: white;
  padding: 0;
}

.logo {
  position: fixed;
  width: 60px;
  bottom: 20px;
  right: 30px;
}
</style>
