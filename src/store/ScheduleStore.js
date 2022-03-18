import { createStore } from 'vuex';

export default createStore({
    state: {
        serviceContract: null,
        rankDate: [],
        schedules: [],
        isGetSchedules: false
    },
    mutations: {
        addSchedules( state, { data } ) {
            state.schedules = [...data];
        },
        addServiceContract(state, { data }) {
            state.serviceContract = data
        },
        addRankDate(state, { data }) {
            state.rankDate = data;
        },
        addIsGetSchedules(state, { data }) {
            state.isGetSchedules = data;
        }
    },
    actions: {
        loadScheduleData( context, { data }) {
            context.commit('addSchedules', { data })
        },
        loadServiceContractData( context, { data }) {
            context.commit('addServiceContract', { data })
        },
        loadRankDateData( context, { data }) {
            context.commit('addRankDate', { data })
        },
        activeGetSchedule( context, { data }) {
            context.commit('addIsGetSchedules', { data })
        }
    },
    getters: {
        schedules( state ) {
            return state.schedules;
        }
    }
});
