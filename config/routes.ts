export default [
    { 
        exact: true, 
        path: '/login', 
        component: 'login',
        headerRender: false,
        footerRender: false,
        menuRender: false,
    },
    { exact: true, path: '/', component: 'index' },
];