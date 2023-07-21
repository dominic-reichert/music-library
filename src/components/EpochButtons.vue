<template>
  <div class="button-container">
    <button
      class="epoch-button"
      v-for="{ epoch, color, id } in epochs"
      :key="id"
      :style="{ 'background-color': color }"
      @click="$router.push({ name: 'epochDetails', params: { epoch: epoch } })"
    >
      <p>{{ epoch }}</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      epochs: [
        { epoch: "Medieval", color: "#ffba08", id: 1 },
        { epoch: "Renaissance", color: "#faa307", id: 2 },
        { epoch: "Baroque", color: "#f48c06", id: 3 },
        { epoch: "Classical", color: "#e85d04", id: 4 },
        { epoch: "Early Romantic", color: "#dc2f02", id: 5 },
        { epoch: "Romantic", color: "#d00000", id: 6 },
        { epoch: "Late Romantic", color: "#9d0208", id: 7 },
        { epoch: "20th Century", color: "#6a040f", id: 8 },
        { epoch: "Post-War", color: "#370617", id: 9 },
        { epoch: "21st Century", color: "#24030f", id: 10 },
      ],
    };
  },
};
</script>

<style scoped>
.button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 0.5rem;
}

.epoch-button {
  all: unset;

  padding: 1rem 0.3rem;
  border-radius: 5px;

  color: snow;
  font-weight: 600;

  cursor: pointer;
}
</style>
