import axios from 'axios';
// class Request {
export const onClickButton = async data => {
    return await axios.get(
        'http://adminapi.108sq.org:1505/postcommercialize/admin/istop/getIstopOrderDetail',
        {
            params: data,
        },
    );
};
// }

// export default Request;
