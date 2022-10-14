<template>
  <b-card bgVariant="dark">
    <b-card-text class="d-flex justify-content-center">
      <template v-for="date in getDates" :key="date">
        <div :class="{active: currentDate(date)}" class="mx-4">
          <p class="mb-0">{{ formatDate(date, 'ddd') }}</p>
          <p class="mb-0">{{ formatDate(date, 'DD.MM.') }}</p>
        </div>
      </template>
    </b-card-text>
  </b-card>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters("epg", [
      "getDates"
    ]),
    currentDate: () => (date) => {
      const now = new moment();
      return now.isSame(date, 'day');
    },
    formatDate: () => (value, format) => {
      const date = new moment(value);
      return date.format(format);
    },
  }
}
</script>
<style scoped>
  .active {
    font-weight: bold;
  }
</style>