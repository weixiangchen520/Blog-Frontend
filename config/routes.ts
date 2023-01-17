export default [
    { 
        exact: true, 
        path: '/login', 
        component: 'login',
        headerRender: false,
        footerRender: false,
        menuRender: false,
    },
    {
        path: '/',
        component: '@/layout/index',
        flatMenu: true,
        routes: [
            { 
                exact: true, 
                path: '/home', 
                component: 'index',
                name: '首页'
            },
            {
                path: '/system',
                name: '系统管理',
                notSupportNav: true,
                routes: [
                    {
                        exact: true,
                        path: '/system/menu',
                        component: 'system/menu',
                        name: '菜单管理'
                    },
                    {
                        exact: true,
                        path: '/system/menu/add',
                        component: 'system/menu/add',
                        name: '添加菜单',
                    }
                ]
            }
        ]
    }
];