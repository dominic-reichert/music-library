<template>
  <section>
    <h2>Popular Composers</h2>
    <article
      class="popular-composers-list"
      v-for="composer in popularComposers"
      :key="composer.id"
      @click="
        $router.push({ name: 'composerWorks', params: { id: composer.id } })
      "
    >
      <img class="composer-img" :src="composer.portrait" alt="composer.name" />
      <div>
        <h4>{{ composer.complete_name }}</h4>
        <p>{{ composer.epoch }}</p>
      </div>
    </article>
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
h4 {
  margin: 0;
}

p {
  margin-top: 0.5rem;

  font-weight: 400;
}

.popular-composers-list {
  display: flex;
  gap: 0.5rem;

  margin-top: 1rem;
  padding: 0.5rem;

  font-weight: 600;

  background-color: #101010;
  border-radius: 5px;

  cursor: pointer;
}

.composer-img {
  width: 4rem;
  border-radius: 5px;
}
</style>
