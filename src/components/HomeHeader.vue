<template>
  <header>
    <h1>Classical Music Library</h1>
    <form>
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </span>
        <input
          class="form-control"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="What are you looking for?"
          v-model="searchInput"
        />
      </div>
      <button class="btn" @click.prevent="handleClick()">Search</button>
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
  gap: 0.5rem;
}

input {
  width: 100%;
}

#searchbar {
  font-size: 0.9rem;
  padding: 0.5rem;

  font-weight: 600;
}
.btn {
  background-color: #f48c06;
  color: snow;
  font-weight: 600;
}
</style>
