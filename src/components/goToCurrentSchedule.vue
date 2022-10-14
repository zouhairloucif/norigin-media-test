<template>
  <b-button class="now-button" variant="warning" @click="scrollToNow">
    NOW
  </b-button>
</template>
<script>
export default {
  methods: {
    scrollToNow: () => {
      const el = document.getElementById('tick');
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: 'center',
          inline: 'center'
        });
      }
    }
  }
}
</script>
<style scoped>
  .now-button {
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: #FFFFFF;
  }
</style>