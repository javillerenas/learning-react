<template>
  <div class="star-ratings">
    <Star
      v-for="(n, i) in totalStars"
      :key="i"
      :id="i + 1"
      :selected="i < selectedStars"
      @starClicked="onSelectedStar"
    />
  </div>
</template>

<script>
import Star from "./Star.vue";

export default {
  components: {
    Star
  },
  props: {
    totalStars: {
      type: Number,
      default: 5
    },
    initialStarsSelected: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selectedStars: this.initialStarsSelected
    };
  },
  methods: {
    onSelectedStar(number) {
      this.selectedStars = number;
    }
  }
};
</script>

<style scoped>
.star-ratings {
  height: 25px;
}
</style>
