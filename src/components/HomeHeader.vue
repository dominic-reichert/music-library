<template>
  <header>
    <h1>Classical Music Library</h1>
    <form>
      <div class="search-input">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="What are you looking for?"
          v-model="searchInput"
        />
        <img class="search-icon" src="../assets/search-icon.svg" />
      </div>
      <button @click.prevent="handleClick()">Search</button>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    returnSearchTerms() {
      return this.searchInput.split(" ").join("+");
    },
  },
  methods: {
    resetInput() {
      this.searchInput = "";
    },
    handleClick() {
      if (this.searchInput !== "") {
        this.$router.push({
          name: "searchResults",
          params: { searchterms: this.returnSearchTerms },
        }),
          this.resetInput();
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  gap: 1rem;
}

.search-input {
  width: 100%;
  position: relative;
}

input {
  width: 100%;
}

#searchbar {
  font-size: 1.2rem;
  padding: 0.5rem;
}

.search-icon {
  position: absolute;
  width: 2rem;

  top: 6px;
  right: 10px;
}
</style>
