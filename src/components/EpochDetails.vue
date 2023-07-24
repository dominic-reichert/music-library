<template>
  <section>
    <h2>Epoch Details Page</h2>
    <div class="grid-container">
      <article
        class="composers-list"
        v-for="composer in epochComposers"
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
          <p>*{{ composer.birth }} - †{{ composer.death }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      epochComposers: [],
    };
  },
  async created() {
    const response = await fetch(
      `https://api.openopus.org/composer/list/epoch/${this.$route.params.epoch}.json`
    );
    const { composers } = await response.json();
    this.epochComposers = composers;
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

.composers-list {
  display: flex;
  gap: 0.5rem;

  padding: 0.5rem;

  font-weight: 600;

  background-color: #212529;
  border-radius: 5px;

  cursor: pointer;
}

.composer-img {
  width: 4rem;
  border-radius: 5px;

  cursor: pointer;
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
