import { HTTP } from '@/services/http-common';

export default {
    getRankDates(serviceContractId) {
        const url = `schedules/rank_dates?service_contract_id=${serviceContractId}`;
        return HTTP.get(url).then((response) => {
            return response.data;
        });
    }
}
