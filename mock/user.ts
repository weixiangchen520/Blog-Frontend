export default {
    'GET /api/user/menuData': {
        code: 200,
        data: [
            {
                path: '/home',
                name: '首页'
            },
            {
                path: '/system',
                name: '系统管理',
                children: [
                    {
                        path: '/system/menu',
                        name: '菜单管理',
                        children: [
                            {
                                path: '/system/menu/add',
                                name: '添加菜单',
                                hideInMenu: true,
                            }
                        ]
                    },
                ]
            }
        ]
    },

    'GET /api/user/info': {
        code: 200,
        data: {
            username: 'test',
            avatar: '/logo.png'
        }
    }
}