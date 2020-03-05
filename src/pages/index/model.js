import request from '@/api/request';

export default {
    namespace: 'index',
    state: {
        show: 'indexShow111',
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *getIstopOrderDetail(action, { call, put, select }) {
            const { common, index } = yield select(state => state);
            console.log(common.show);
            console.log(index.show);

            const Result = yield call(request.getIstopOrderDetail, {
                id: action.payload.id,
            });
            console.log('22222222222222');
            console.log(Result);
        },
    },
    subscriptions: {},
};
