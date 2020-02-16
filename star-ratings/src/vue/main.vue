<template>
  <div class="app-container">
    <h1>Vue Stars</h1>
    <StarRatings :initialStarsSelected="5" :totalStars="8" />
  </div>
</template>

<script>
import StarRatings from "./components/StarRatings.vue";
import "../styles/star.css";

export default {
  components: {
    StarRatings
  }
};
</script>

<style scoped>
.app-container {
  border-radius: 5px;
  padding: 1rem;
  background-color: #51a3e7;
  background-image: linear-gradient(
    90deg,
    #51a3e7 0%,
    #3795eb 50%,
    #0095ff 100%
  );

  width: 300px;
}

.app-container:hover {
  transform: scale(1.03);
  transition: all ease .2s;
}

.app-container h1 {
  color: white;
}
</style>
