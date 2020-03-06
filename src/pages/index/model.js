import request from '@/libs/request';

export default {
    namespace: 'index',
    state: {
        indexMain: {
            show: 'indexShow111',
        },
        indexChildComponent1: {
            show: 'indexChildComponent1Of111',
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *getIstopOrderDetail(action, { call, put, select }) {
            const { common, index } = yield select(state => state);
            const Result = yield call(request.getIstopOrderDetail, {
                id: action.payload.id,
            });
            console.log('22222222222222');
            console.log(Result);
        },
    },
    subscriptions: {},
};
