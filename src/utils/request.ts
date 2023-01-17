import { extend } from 'umi-request';

const request = extend({
    prefix: '/api'
});

const requestWrapper = (url: string, params?: IParams) => {
    return request(url, params);
}

export const get = (url: string, params?: IParams) => {
    return requestWrapper(url, {
        method: 'get',
        params
    });
};

export const post = (url: string, data?: IParams) => {
    return requestWrapper(url, {
        method: 'post',
        data
    });
};