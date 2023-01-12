import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../App.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        redirect: '/main',
        children: [
            {
                path: 'main',
                component: async () =>
                    await import('/@/views/main/views/test.vue'), // 懒加载组件
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
