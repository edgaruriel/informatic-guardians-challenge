<template src="./WeekAvailableViewTemplate.html"></template>
<style scoped src="./WeekAvailableViewStyle.css"></style>

<script>
import FilterWeek from "@/components/FilterWeek/FilterWeek";
import ScheduleAvailable from "@/components/ScheduleAvailable/ScheduleAvailable";
import ScheduleDay from "@/components/ScheduleDay/ScheduleDay";
import ScheduleService from "@/services/ScheduleService";
import {ref} from "vue";

export default {
  name: 'WeekAvailableView',
  components: {FilterWeek, ScheduleAvailable, ScheduleDay},
  methods: {
    updateSchedule() {
      this.isUpdate = true;
      const rankDate = this.$store.state.rankDate;
      ScheduleService.updateSchedules(
          this.$store.state.serviceContract,
          rankDate[0], rankDate[1],
          this.$store.state.schedules).then( r => {
          this.$store.dispatch('loadScheduleData', { data: r.data})
          this.isUpdate = false;
          this.modeEdit = false;
      });
    }
  },
  created() {
    this.$store.dispatch('loadScheduleData', {data: []});
    this.unwatchSubmitSchedule = this.$store.watch(
        (state, getters) => getters.isGetSchedules,
        (newValue) => {
          if (newValue) {
            this.modeEdit = false;
          }
        }
    );
    this.unwatchSchedules = this.$store.watch(
        (state, getters) => getters.schedules,
        (newValue) => {
          this.freeHours = 0;
          let employee_times = {};
          newValue.forEach((s) => {
            s['times'].forEach(t => {
              let freeHoursFlag = true;
              t['employees'].forEach(e => {
                employee_times[e['employee_id']] ||= {employeeName: null, hours: 0, colorTag: ''}
                employee_times[e['employee_id']]['employeeName'] = e['name'];
                employee_times[e['employee_id']]['colorTag'] = e['color_tag'];
                if (e['is_confirmed']) {
                  freeHoursFlag = false;
                  employee_times[e['employee_id']]['hours'] += 1
                }
              });
              if (freeHoursFlag) {
                this.freeHours += 1;
              }
            });
          });
          this.summarySchedule = employee_times;
        });
  },
  beforeUnmount() {
    this.unwatchSubmitSchedule();
    this.unwatchSchedules();
  },
  setup() {
    const modeEdit = ref(false);
    const isUpdate = ref(false);
    const summarySchedule = ref({});
    const freeHours = ref(0);

    return {
      summarySchedule,
      freeHours,
      modeEdit,
      isUpdate
    };
  }
}
</script>
