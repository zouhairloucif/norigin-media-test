<template>
  <p class="text-muted">{{ getValue }}</p>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    isoDate: String,
    format: String
  },
  computed: {
    getValue() {
      const date = new moment(this.isoDate);
      return date.format(this.format);
    }
  }
}
</script>