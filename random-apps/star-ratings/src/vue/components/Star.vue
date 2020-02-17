<template>
  <div class="star" :class="{selected: selected}" @click="selectStar()" ></div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    id: Number
  },
  methods: {
    selectStar() {
      this.$emit('starClicked', this.id)
    }
  }
}
</script>


<style scoped>
.star {
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 2px;
  background-color: white;
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
}
.star.selected {
  background-color: #EBC801;
}
</style>
