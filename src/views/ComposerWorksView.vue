<template>
  <section class="container">
    <HomeHeader />
    <ComposerWorks />
  </section>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import ComposerWorks from "@/components/ComposerWorks.vue";

export default {
  name: "ComposerView",
  components: {
    HomeHeader,
    ComposerWorks,
  },
};
</script>

<style scoped>
.container > * + * {
  margin-top: 2rem;
}
</style>
