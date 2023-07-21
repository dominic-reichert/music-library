<template>
  <section>
    <h2>Epoch Details Page</h2>
    <article
      class="composers-list"
      v-for="composer in epochComposers"
      :key="composer.id"
      @click="
        $router.push({ name: 'composerWorks', params: { id: composer.id } })
      "
    >
      <img class="composer-img" :src="composer.portrait" alt="composer.name" />
      <div>
        <h4>{{ composer.complete_name }}</h4>
        <p>*{{ composer.birth }} - †{{ composer.death }}</p>
      </div>
    </article>
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
h4 {
  margin: 0;
}

p {
  margin-top: 0.5rem;

  font-weight: 400;
}

.composers-list {
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

  cursor: pointer;
}
</style>
