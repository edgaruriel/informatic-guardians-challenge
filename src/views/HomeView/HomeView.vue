<template src="./HomeViewTemplate.html"></template>
<style scoped src="./HomeViewStyle.css"></style>

<script>
import moment from 'moment';

export default {
  name: 'HomeView',
  data: () => ({
    currentWeek: moment(new Date).week(),
    currentDate: moment(new Date).format('MM/DD/YYYY')
  }),
  components: {}
}
</script>
