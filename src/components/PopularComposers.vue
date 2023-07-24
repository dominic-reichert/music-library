<template>
  <section>
    <h2>Popular Composers</h2>
    <div class="grid-container">
      <article
        class="card composer-card"
        v-for="composer in popularComposers"
        :key="composer.id"
        @click="
          $router.push({ name: 'composerWorks', params: { id: composer.id } })
        "
      >
        <img
          class="composer-img"
          :src="composer.portrait"
          :alt="composer.name"
        />
        <div>
          <h3>{{ composer.complete_name }}</h3>
          <p>{{ composer.epoch }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      popularComposers: [],
    };
  },
  async created() {
    const response = await fetch(
      "https://api.openopus.org/composer/list/pop.json"
    );
    const { composers } = await response.json();
    this.popularComposers = composers;
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
  font-size: 1.2rem;
}

p {
  margin-top: 0.5rem;

  font-weight: 400;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.composer-card {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  padding: 0.5rem;

  font-weight: 600;

  background-color: #212529;
  color: snow;

  cursor: pointer;
}

.composer-img {
  width: 4rem;
  border-radius: 5px;
}

@media screen and (min-width: 900px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
