export default {
    namespace: 'common',
    state: {
        show: 'commonShow',
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {},
    subscriptions: {},
};
