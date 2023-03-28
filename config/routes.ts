export default [
    { 
        exact: true, 
        path: '/login', 
        component: 'login',
    },
    { 
        exact: true, 
        path: '/register', 
        component: 'register',
    },
    {
        path: '/',
        component: '@/layout/index',
        wrappers: [
            '@/wrappers/auth',
        ],
        routes: [
            { 
                exact: true, 
                path: '/home', 
                component: 'index',
            },
            {
                path: '/system',
                routes: [
                    {
                        exact: true,
                        path: '/system/menu',
                        component: 'system/menu',
                    },
                    {
                        exact: true,
                        path: '/system/menu/add',
                        component: 'system/menu/add',
                    }
                ]
            },
            { 
                redirect: '/home', 
            },
        ]
    }
];