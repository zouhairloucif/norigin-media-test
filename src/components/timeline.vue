<template>
  <b-card bgVariant="dark" borderVariant="secondary" style="width: max-content;">
    <b-card-text class="d-flex">
      <template v-for="hour in hours" :key="hour">
        <span :style="`margin-right: ${getTimelineMargin(hour)};`" :class="{active: currentTime(hour)}">{{ (hour < 10 ? `0${hour}` : hour) + ':00' }}</span>
      </template>
    </b-card-text>
  </b-card>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
  },
  computed: {
    currentTime: () => (time) => {
      const now = new moment();
      return now.hours() !== time;
    },
    getTimelineMargin: () => (hour) => {
      if (hour == 23) {
        return '59rem';
      }
      return '59rem';
    }
  }
}
</script>
<style scoped>
  
</style>