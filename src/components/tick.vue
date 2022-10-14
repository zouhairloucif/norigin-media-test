<template>
  <span id="tick" class="tick" :style="`margin-left: ${getTickPosition}rem;`"></span>
</template>
<script>
import moment from 'moment';
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const el = document.getElementById('tick');
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: 'center',
          inline: 'center'
        });
      }
    })
  },
  computed: {
    getTickPosition() {
      const now = moment();
      const hours = now.hour() ;
      return (hours * 60) +  now.minute();
    }
  }
}
</script>
<style scoped>
  .tick {
    position: absolute;
    height: 100%;
    width: 1px;
    z-index: 2;
    background-color: gold;
  }
  .tick::after {
    width: 8px;
    background-color: gold;
    display: block;
    content: ".";
    margin-left: -4px;
    height: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
</style>