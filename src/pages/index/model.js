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
        *onClickButton(action, { call, put, select }) {
            const { common, index } = yield select(state => state);
            console.log(common.show);
            console.log(index.show);

            const { State, Result } = yield call(request.onClickButton, {
                id: action.payload.id,
            });
            console.log('11111111111111111111');
            console.log(Result);
        },
    },
    subscriptions: {},
};
