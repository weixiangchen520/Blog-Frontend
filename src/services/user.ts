import { get } from '@/utils/request';

export const getUserInfo = (params: IParams) => {
    return get('/user/info', params);
}