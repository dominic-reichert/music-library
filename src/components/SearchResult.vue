<template>
  <section>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Composer</th>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in searchResult" :key="result.work.id">
          <th scope="row">{{ index }}</th>
          <td>{{ result.composer.complete_name }}</td>
          <td>{{ result.work.title }}</td>
          <td>{{ result.work.genre }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchResult: {},
      errorMsg: "",
    };
  },
  async created() {
    this.$watch(
      () => this.$route.params.searchterms,
      () => {
        this.fetchData();
      }
    );
    const response = await fetch(
      `https://api.openopus.org/omnisearch/${this.$route.params.searchterms}/0.json`
    );

    const { results } = await response.json();
    if (results === undefined) {
      this.searchResult = {};
      return (this.errorMsg = "Sorry no Data");
    }
    this.searchResult = [...results].filter((result) => result.work !== null);
    this.errorMsg = "";
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        `https://api.openopus.org/omnisearch/${this.$route.params.searchterms}/0.json`
      );

      const { results } = await response.json();
      if (results === undefined) {
        this.searchResult = {};
        return (this.errorMsg = "Sorry no Data");
      }

      this.searchResult = [...results].filter((result) => result.work !== null);
      this.errorMsg = "";
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
  margin: 0;
}

.search-result {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  margin-top: 1rem;
  padding: 0.5rem;

  background-color: #212529;
  color: snow;
}

.composer-img {
  width: 4rem;
  border-radius: 5px;
}
</style>
