export default {
    namespace: 'common',
    state: {
        main: {
            show: 'commonShow',
        },
        commonChildComponent1: {
            show: 'commonChildComponent1Of111',
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {},
    subscriptions: {},
};
