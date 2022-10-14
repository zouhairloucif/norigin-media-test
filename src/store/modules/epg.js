import service from '@/api/epg';
import moment from 'moment';
import { enumerateDaysBetweenDates } from '@/helpers/dates.js'

// initial state
const state = () => ({
  channels: [],
  dates: {
    start: null,
    end: null
  }
})

// Getters
const getters = {
  epgChannels: (state, getters, rootState) => {
    return state.channels;
  },
  getDates: (state) => {
    return enumerateDaysBetweenDates(state.dates.start, state.dates.end)
  }
}

// Actions
const actions = {
  getEpg({ commit, state }) {
    return new Promise((resolve, reject) => {
      // empty list
      commit('setEpgChannels', { channels: [] });
      service.getEpg()
        .then((response) => {
          commit('setEpgChannels', { channels: response.channels });
          commit('setEpgDates', { channels: response.channels });
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
    })
  },
}

// mutations
const mutations = {
  setEpgChannels(state, { channels }) {
    state.channels = channels
  },
  setEpgDates(state, { channels }) {
    let start = channels[0].schedules[0].start;
    let end = channels[0].schedules[0].end;
    channels.map((channel) => {
      channel.schedules.map((schedule) => {
        if (moment(schedule.start).isBefore(start)) {
          start = schedule.start;
        }
        if (moment(schedule.end).isAfter(end)) {
          end = schedule.end;
        }
      })
    })
    state.dates = {
      start: start,
      end: end
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}