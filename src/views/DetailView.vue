<template>
  <div class="detail" :class="{'d-flex justify-content-center my-5': isLoading}">
    <template v-if="isLoading">
      <b-spinner type="grow" class="text-center"></b-spinner>
    </template>
    <template v-else-if="schedule">
      <h1 class="text-center">{{ schedule.title }}</h1>
      <p class="text-center">Starts At {{ getStartDate }}</p>
      <p class="text-center">Ends At {{ getEndDate }}</p>
    </template>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isLoading: false,
      schedule: null
    }
  },
  computed: {
    ...mapGetters('epg', [
      'epgChannels'
    ]),
    getStartDate() {
      if(!this.schedule) return 'N/A';
      return moment(this.schedule.start).format('hh:mm')
    },
    getEndDate() {
      if(!this.schedule) return 'N/A';
      return moment(this.schedule.end).format('hh:mm')
    }
  },
  created() {
    if(!this.epgChannels.length) {
      this.fetchDataFromApi();
    }
    const {id} = this.$route.params;
    if (id) {
      this.epgChannels.map((channel) => channel.schedules.filter((schedule) => {
        if (schedule.id == id) {
          this.schedule = schedule;
        }
      }))
    }
  },
  methods: {
    fetchDataFromApi() {
      this.isLoading = true;
      this.$store.dispatch("epg/getEpg")
        .then((response) => {})
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
}
</script>

<style scoped>
</style>
