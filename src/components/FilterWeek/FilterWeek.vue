<template src="./FilterWeekTemplate.html"></template>
<style scoped src="./FilterWeekStyle.css"></style>

<script>
import { ref } from "vue";
import moment from 'moment';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import ScheduleService from "@/services/ScheduleService";
import RankDateService from "@/services/RankDateService";

export default {
  name: 'FilterWeek',
  components: { Datepicker },
  setup() {
    const numberWeek = ref(0);
    const momentStartWeek = moment(new Date()).startOf('isoWeek');
    const minDate = momentStartWeek.add(1, 'week').toDate();
    const maxDate = momentStartWeek.add(34, 'days').toDate();
    const datesRank = ref([]);
    const listService = ref([]);
    const isSearch = ref(false);
    const serviceSelected = ref(null);
    const clickedSearch = ref(false);
    const disabledDatePicker = ref(true);
    return {
      numberWeek,
      serviceSelected,
      disabledDatePicker,
      listService,
      clickedSearch,
      datesRank,
      minDate,
      maxDate,
      isSearch
    };
  },
  mounted() {
    this.listService = this.$route.meta['listService'];
  },
  methods: {
    findRankDateAvailable() {
      this.disabledDatePicker = true;
      RankDateService.getRankDates(this.serviceSelected).then( r => {
        this.minDate = r.start_date;
        this.maxDate = r.end_date;
        this.disabledDatePicker = false;
      });
    },
    searchData() {
      this.clickedSearch = true;
      this.isSearch = true;
      if (this.datesRank.length > 0 && this.serviceSelected) {
        const startDate = moment(new Date(this.datesRank[0])).format('DD/MM/yyyy');
        const endDate = moment(new Date(this.datesRank[1])).format('DD/MM/yyyy');
        this.$store.dispatch('loadServiceContractData', {data: this.serviceSelected});
        this.$store.dispatch('loadRankDateData', {data: [startDate, endDate]});
        this.$store.dispatch('loadScheduleData', {data: []});
        this.$store.dispatch('activeGetSchedule', {data: true});
        ScheduleService.getSchedules(this.serviceSelected, startDate, endDate).then(async r => {
          let data = r.data;
          if (data.length === 0) {
            const cs = await ScheduleService.createSchedules(this.serviceSelected, startDate, endDate);
            data = cs.data;
          }
          this.$store.dispatch('loadScheduleData', {data});
          this.$store.dispatch('activeGetSchedule', {data: false});
          this.isSearch = false;
        })
      } else {
        this.isSearch = false;
      }
    },
    calculateNumberWeek(data) {
      this.numberWeek = moment(new Date(data[0])).week();
    }
  }
}
</script>
