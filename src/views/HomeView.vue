<template>
  <section class="container">
    <HomeHeader></HomeHeader>
    <EpochButtons />
    <PopularComposers />
  </section>
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
.container > * + * {
  margin-top: 2rem;
}
</style>
