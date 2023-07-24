<template>
  <section class="container">
    <HomeHeader />
    <SearchResult />
  </section>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import SearchResult from "@/components/SearchResult.vue";

export default {
  name: "SearchResultsView",
  components: {
    HomeHeader,
    SearchResult,
  },
};
</script>

<style scoped>
.container > * + * {
  margin-top: 2rem;
}
</style>
