import { createStore, createLogger } from 'vuex';
import epg from './modules/epg';

const isDebugMode = import.meta.env.MODE !== 'production';

export default createStore({
  modules: {
    epg
  },
  strict: isDebugMode,
  plugins: isDebugMode ? [createLogger()] : []
})