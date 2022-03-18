import ServiceContractService from "@/services/ServiceContractService";

export const listServiceContract = async (to, from, next) => {
    to.meta['listService'] = await ServiceContractService.getServiceContracts();
    next();
};
