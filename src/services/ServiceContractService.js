import { HTTP } from '@/services/http-common';

export default {
    getServiceContracts() {
        return HTTP.get('service_contracts').then((response) => {
            return response.data;
        });
    }
}
