<template>
  <section class="container">
    <HomeHeader />
    <EpochDetails />
  </section>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import EpochDetails from "@/components/EpochDetails.vue";

export default {
  name: "ComposerView",
  components: {
    HomeHeader,
    EpochDetails,
  },
};
</script>

<style scoped>
.container > * + * {
  margin-top: 2rem;
}
</style>
