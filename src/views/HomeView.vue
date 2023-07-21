<template>
  <HomeHeader></HomeHeader>
  <h2>Search All</h2>
  <EpochButtons class="epoch-buttons" />
  <PopularComposers></PopularComposers>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader.vue";
import PopularComposers from "@/components/PopularComposers.vue";
import EpochButtons from "@/components/EpochButtons.vue";

export default {
  name: "HomeView",
  components: {
    HomeHeader,
    PopularComposers,
    EpochButtons,
  },
};
</script>

<style scoped>
.epoch-buttons {
  margin-top: 1rem;
}
</style>
