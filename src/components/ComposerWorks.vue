<template>
  <section>
    <h1>{{ composerData.complete_name }}</h1>
    <article class="composer-info">
      <img
        class="composer-img"
        :src="composerData.portrait"
        alt="composer.name"
      />
      <div>
        <p>*{{ composerData.birth }} - †{{ composerData.death }}</p>
        <p>{{ composerData.epoch }}</p>
      </div>
    </article>
    <article>
      <h2>Works</h2>
      <ul v-for="work in worksData" :key="work.id">
        <li>
          {{ work.title }} || <strong>{{ work.genre }}</strong>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      composerData: [],
      worksData: [],
    };
  },
  async created() {
    const response = await fetch(
      `https://api.openopus.org/work/list/composer/${this.$route.params.id}/genre/all.json`
    );
    const { composer, works } = await response.json();
    this.composerData = composer;
    this.worksData = works;
  },
};
</script>

<style scoped>
.composer-info {
  display: flex;
  gap: 0.5rem;
}

.composer-img {
  width: 4rem;
  border-radius: 5px;
}
</style>
