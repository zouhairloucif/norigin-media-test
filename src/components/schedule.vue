<template>
  <b-card
    bgVariant="black"
    borderVariant="secondary"
    class="schedule"
    :class="{ active: isCurrentSchedule(schedule) }"
    :style="`height: 100px; min-width: ${getScheduleWidth(schedule)}`"
    @click="navigateTo(schedule.id)">
    <b-card-text>
      <p class="mb-0">{{ schedule.title }}</p>
      <date-to-time :iso-date="schedule.start" format="HH:MM" />
    </b-card-text>
  </b-card>
</template>
<script>
import moment from 'moment';
import DateToTime from '../components/dateToTime.vue';
export default {
  props: {
    schedule: Object
  },
  components: {
    DateToTime
  },
  computed: {
    getScheduleWidth: () => (schedule) => {
      const start = moment(schedule.start);
      const end = moment(schedule.end);
      const duration = moment.duration(end.diff(start));
      return `${duration.asMinutes()}rem`;
    },
    isCurrentSchedule: () => (schedule) => {
      const now = moment().format('YYYY-MM-DDThh:mm:ssZ');
      return moment(now).isBetween(schedule.start, schedule.end);
    }
  },
  methods: {
    navigateTo(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
}
</script>
<style scoped>
  .schedule:hover {
    filter: contrast(0.8);
    cursor: pointer;
  }
  .schedule.active {
      background-color: #373737 !important;
  }
</style>