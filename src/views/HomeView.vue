<template>
  <main>
    <b-alert variant="danger" dismissible show>
      Images can't be loaded from API so I used channel names instead
    </b-alert>
    <b-container :class="{'d-flex justify-content-center my-5': isLoading}" class="position-relative">
      <template v-if="isLoading">
        <b-spinner type="grow" class="text-center"></b-spinner>
      </template>
      <template v-else>
        <b-row gutterX="0">
          <b-col cols="4" md="2">
            <b-card bgVariant="dark" class="h-100 text-center">
              <b-card-text>
                <svg-icon type="mdi" :path="mdiStar" :size="40"></svg-icon>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="8" md="10" class="overflow-x-auto">
            <dates></dates>
          </b-col>
        </b-row>
        
        <b-row gutterX="0">
          <b-col cols="4" md="2">
            <b-row>
              <b-col cols="12">
                <b-card bgVariant="dark" borderVariant="secondary" class="text-center">
                  <b-card-text>
                    <span>Timestamp</span>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-row v-for="(channel, index) in epgChannels" :key="channel.title + index">
              <b-col cols="12">
                <channel :channel="channel"></channel>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="8" md="10" class="overflow-x-auto position-relative">
            <tick></tick>
            <b-row>
              <b-col cols="12">
                <timeline></timeline>
              </b-col>
            </b-row>
            <b-row v-for="(channel, index) in epgChannels" :key="index">
              <b-col cols="12" class="d-flex">
                <schedule v-for="schedule in channel.schedules" :key="schedule.id + index" :schedule="schedule"></schedule>
                <p>{{ channel.title }}</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <go-to-current-schedule></go-to-current-schedule>
      </template>
    </b-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { mdiStar } from '@mdi/js'
import moment from 'moment';
import Timeline from '@/components/timeline.vue';
import Dates from '@/components/dates.vue';
import Tick from '@/components/tick.vue';
import Schedule from '@/components/schedule.vue';
import Channel from '@/components/channel.vue';
import GoToCurrentSchedule from '@/components/goToCurrentSchedule.vue';
export default {
  setup() {
    return {
      mdiStar
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    Timeline,
    Dates,
    Tick,
    Schedule,
    Channel,
    GoToCurrentSchedule
},
  created() {
    this.fetchDataFromApi();
  },
  computed: {
    ...mapGetters("epg", [
      "epgChannels"
    ]),
    getScheduleWidth: () => (schedule) => {
      const start = new moment(schedule.start);
      const end = new moment(schedule.end);
      const duration = moment.duration(end.diff(start));
      return `${duration.asMinutes()}rem`;
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
  },
}
</script>

<style scoped>
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>