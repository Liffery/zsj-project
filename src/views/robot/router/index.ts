import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../App.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        redirect: '/robot',
        children: [
            {
                path: 'robot',
                component: async () =>
                    await import('/@/views/robot/views/test.vue'), // 懒加载组件
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
