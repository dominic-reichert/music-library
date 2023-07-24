<template>
  <section>
    <h1>{{ composerData.complete_name }}</h1>
    <article class="card composer-card">
      <img
        class="composer-img"
        :src="composerData.portrait"
        :alt="composerData.name"
      />
      <div>
        <p>*{{ composerData.birth }} - †{{ composerData.death }}</p>
        <p>{{ composerData.epoch }}</p>
      </div>
    </article>
    <article>
      <h2>Works</h2>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(work, index) in worksData" :key="work.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ work.title }}</td>
            <td>{{ work.genre }}</td>
          </tr>
        </tbody>
      </table>
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
article + article {
  margin-top: 2rem;
}
.composer-card {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  margin-top: 1rem;
  padding: 0.5rem;

  font-weight: 600;

  background-color: #212529;
  color: snow;
}

.composer-img {
  width: 4rem;
  border-radius: 5px;
}
</style>
