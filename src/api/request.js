import axios from 'axios';
let hostOfDifferentEnvironment = {
    dev: {
        adminapi: 'http://adminapi.108sq.org:1505',
    },
    pre: {
        adminapi: 'http://adminapi-pre.108sq.net',
    },
    prod: {
        adminapi: 'http://adminapi.108sq.net',
    },
};

let getUrl = (pathName, host = 'adminapi') => {
    let url = hostOfDifferentEnvironment[API_HOST][host] + pathName;
    return url;
};

export default {
    getIstopOrderDetail: async data => {
        return await axios.get(
            getUrl('/postcommercialize/admin/istop/getIstopOrderDetail'),
            {
                params: data,
            },
        );
    },
};
