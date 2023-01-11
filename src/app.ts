import { history } from 'umi';
import { getUserInfo } from '@/services';

export const getInitialState = async () => {
    const userInfo = await getUserInfo({
        id: 3
    });
    return {
        ...userInfo,
        name: userInfo.username
    };
};

export const layout = {
    logout: () => {
        history.push('/login')
    },
  };