import { history, RunTimeLayoutConfig } from 'umi';
import { getUserInfo, getMenuData } from '@/services';

export const getInitialState = async () => {
    const { data } = await getUserInfo({
        id: 3
    });
    return {
        ...data,
        name: data.username
    };
};

export const layout: RunTimeLayoutConfig = () => {
    return {
        menu: {
            request: async (params, defaultMenuData) => {
                const { data } = await getMenuData();
                return data;
            },
        },
    };
};