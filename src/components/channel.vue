<template>
  <b-card bgVariant="dark" borderVariant="secondary" class="text-center" style="height: 100px;">
    <b-card-text>
      <p>{{channel.title}}</p>
      <image :src="channel.images.logo" :alt="channel.title" />
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: {
    channel: Object
  }
}
</script>
<style scoped>
  
</style>