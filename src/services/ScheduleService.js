import { HTTP } from '@/services/http-common';

export default {
    getSchedules(serviceContractId, startDate, endDate) {
        const url = `schedules?service_contract_id=${serviceContractId}&start_date=${startDate}&end_date=${endDate}`;
        return HTTP.get(url);
    },
    createSchedules(serviceContractId, startDate, endDate) {
        const params = {service_contract_id: serviceContractId, start_date: startDate, end_date: endDate};
        return HTTP.post('schedules', params);
    },
    updateSchedules(serviceContractId, startDate, endDate, schedules) {
        const params = {service_contract_id: serviceContractId, start_date: startDate, end_date: endDate, schedules: schedules};
        return HTTP.put('schedules', params);
    }
}
