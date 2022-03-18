<template src="./ScheduleAvailableTemplate.html"></template>
<style scoped src="./ScheduleAvailableStyle.css"></style>

<script>

import {ref} from "vue";
import moment from 'moment';
moment.locale('es');

export default {
  name: 'ScheduleAvailable',
  props: ['schedule'],
  setup() {
    const titleTable = ref('');
    const titleColumns = ref(['Horario']);
    return {
      titleColumns,
      titleTable
    }
  },
  created() {
    const date = moment(new Date(this.schedule.date));
    this.titleTable = date.format('dddd D [de] MMMM');
    if (this.schedule.times.length > 0) {
      const firstTime = this.schedule.times[0];

      firstTime.employees.forEach(employee => {
        this.titleColumns.push(employee.name);
      });
    }
  }
}

</script>
