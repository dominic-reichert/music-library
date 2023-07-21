<template>
  <HomeHeader />
  <SearchResult />
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
