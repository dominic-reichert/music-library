<template>
  <HomeHeader />
  <ComposerWorks />
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
