<template src="./FilterWeekTemplate.html"></template>
<style scoped src="./FilterWeekStyle.css"></style>

<script>
import { ref } from "vue";
import moment from 'moment';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

export default {
  name: 'FilterWeek',
  components: { Datepicker },
  setup() {
    // const maxDate = moment().endOf('week');
    const numberWeek = ref(0);
    const minDate = moment(new Date()).startOf('week').toDate();
    const maxDate = moment(new Date()).add(5, 'weeks').toDate();
    const date = ref([]);
    const listService = ref([{name: 'Servicio 1'}, {name: 'Servicio 2'}, {name: 'Servicio 3'}]);
    const isSearch = ref(false);
    const serviceSelected = ref({});
    return {
      numberWeek,
      serviceSelected,
      listService,
      date,
      minDate,
      maxDate,
      isSearch
    };
  },
  methods: {
    searchData() {
      this.isSearch = true;
      setTimeout(() => {
        this.isSearch = false;
      }, 1000);
    },
    calculateNumberWeek(data) {
      this.numberWeek = moment(new Date(data[0])).week();
    }
  }
}
</script>
