<template src="./ScheduleDayTemplate.html"></template>
<style scoped src="./ScheduleDayStyle.css"></style>

<script>

import {ref} from "vue";
import moment from "moment";

export default {
  name: 'ScheduleDay',
  props: ['schedule'],
  setup() {
    const titleTable = ref('');
    const titleColumns = ref(['Horario', 'Nombre']);
    const scheduleConfirmed = ref([]);
    return {
      titleColumns,
      titleTable,
      scheduleConfirmed
    }
  },
  created() {
    const date = moment(new Date(this.schedule.date));
    this.titleTable = date.format('dddd D [de] MMMM');
    this.scheduleConfirmed = this.schedule.times.map((time) => {
      return {...time, employee: time.employees.find((e) => e.is_confirmed)};
    });
  }
}

</script>
