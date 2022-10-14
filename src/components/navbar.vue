<template>
  <b-navbar sticky="top" class="bg-dark mb-4">
    <b-nav pills class="w-100 d-flex justify-content-between align-items-center">
      <template v-if="$route.name == 'detail'">
        <b-nav-item exactActiveClass="link-active" to="/">
          <svg-icon type="mdi" :path="mdiArrowLeft" :size="40"></svg-icon>
        </b-nav-item>
      </template>
      <template v-else>
        <b-nav-item exactActiveClass="link-active" to="profile">
          <svg-icon type="mdi" :path="mdiAccount" :size="40"></svg-icon>
        </b-nav-item>
      </template>
      <b-nav-item exactActiveClass="link-active" to="/" class="text-center">
        <img class="rounded w-25" src="@/assets/logo.png" alt="Logo">
      </b-nav-item>
      <b-nav-item search @click="$emit('toggleSearch')">
        <svg-icon type="mdi" :path="mdiMagnify" :size="40"></svg-icon>
      </b-nav-item>
    </b-nav>
  </b-navbar>
</template>
<script>
import { mdiAccount, mdiMagnify, mdiArrowLeft } from '@mdi/js'
export default {
  setup() {
    return {
      mdiAccount,
      mdiMagnify,
      mdiArrowLeft
    }
  }
}
</script>
<style scoped>
</style>