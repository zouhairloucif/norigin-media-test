<template>
  <b-card class="mb-3">
    <b-card-text class="d-flex">
      <b-form-input v-model="searchText"></b-form-input>
      <b-button variant="primary" size="lg" class="search-button" pill @click="performSearch">
        Search
      </b-button>
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: {
    showOverlay: Boolean
  },
  data() {
    return {
      searchText: null
    }
  },
  methods: {
    performSearch() {
      if (!this.searchText) {
        return;
      }

    }
  }
}
</script>
<style scoped>
  .search-button {
    margin-left: 10px;
  }
</style>