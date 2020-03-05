import axios from 'axios';
export default {
    onClickButton: async data => {
        return await axios.get(
            'http://adminapi.108sq.org:1505/postcommercialize/admin/istop/getIstopOrderDetail',
            {
                params: data,
            },
        );
    },
};
