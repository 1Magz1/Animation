<template>
  <div class="vue pt-5">
    <div class="vue__wrap">
      <h1 class="vue__title">
        Анимация во Vue
      </h1>
      <div class="vue__part">
        <pre>
<code>.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform .3s ease, opacity .3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}</code>
</pre>
        <div class="vue__col">
          <button
            class="btn btn-primary"
            @click="isShow = !isShow"
          >
            Push me
          </button>
          <transition name="slide-fade">
            <div
              v-if="isShow"
              class="square mt-3"
            />
          </transition>
        </div>
      </div>
      <div class="vue__part">
        <pre>
<code>.component-fade-enter-active,
.component-fade-leave-active {
  transition: transform .3s ease;
}
.component-fade-enter,
.component-fade-leave-to{
  transform: scale(0);
}</code>
</pre>
        <div class="vue__col">
          <b-form-group
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="star"
            >
              Circle
            </b-form-radio>
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="square"
            >
              Square
            </b-form-radio>
          </b-form-group>
          <transition
            name="component-fade"
            mode="out-in"
          >
            <component :is="selected" />
          </transition>
        </div>
        <Arrow
          :is-left="true"
          page="/"
          class="vue__arrow-left"
        />
        <Arrow
          page="lottie"
          class="vue__arrow-right"
        />
      </div>
      <div class="vue__part">
        <pre>
<code>.list-complete-item {
  transition: opacity 1s, transform 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}</code>
</pre>
        <div class="vue__col">
          <button @click="random">
            Random
          </button>
          <button @click="add">
            Add
          </button>
          <button @click="remove">
            Remove
          </button>
          <transition-group
            name="list-complete"
          >
            <span
              v-for="item in items"
              :key="item"
              class="list-complete-item"
            >
              {{ item }}
            </span>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Arrow from '@/components/arrow';

export default {
  name: 'Vue',
  components: {
    Arrow,
    square: {
      template: '<div class="square"/>',
    },
    star: {
      template: '<div class="circle"></div>',
    },
  },
  data() {
    return {
      isShow: false,
      selected: 'star',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.nextNum += 1;
      this.items.splice(this.randomIndex(), 0, this.nextNum);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    random() {
      this.items = this.items
        .map((value) => ({ value, sort: this.randomIndex() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    },
  },
};
</script>

<style lang="scss" scoped>
.vue {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 100%;
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
}

.square {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 100% 200%;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform .3s ease, opacity .3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: transform .3s ease;
}
.component-fade-enter,
.component-fade-leave-to{
  transform: scale(0);
}

.list-complete-item {
  transition: opacity 1s, transform 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
