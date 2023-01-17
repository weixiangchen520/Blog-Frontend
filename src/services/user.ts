import { get } from '@/utils/request';

export const getUserInfo = (params?: IParams) => {
    return get('/user/info', params);
};

export const getMenuData = (params?: IParams) => {
    return get('/user/menuData', params);
}