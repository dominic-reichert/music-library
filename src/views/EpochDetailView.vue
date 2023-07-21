<template>
  <HomeHeader />
  <EpochDetails />
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
