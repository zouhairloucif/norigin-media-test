<template>
  <b-container class="main">
    <Navbar @toggleSearch="toggleSearchChange"></Navbar>
    <SearchSchedules v-if="toggleSearch"></SearchSchedules>
    <RouterView />
  </b-container>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import SearchSchedules from '@/components/searchSchedules.vue';
export default {
  data() {
    return {
      toggleSearch: false
    }
  },
  methods: {
    toggleSearchChange() {
      this.toggleSearch = !this.toggleSearch;
    }
  },
  components: {
    Navbar,
    SearchSchedules
  }
}
</script>

<style scoped>
</style>