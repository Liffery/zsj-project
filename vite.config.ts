import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        root: './src/views',
        base: './',
        // publicDir: VITE_APP_PUBLIC_DIR,
        plugins: [vue()],
        // base: "./", // 设置打包路径
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    find: /\/#\//,
                    replacement: pathResolve('types') + '/',
                },
                {
                    find: /\/main\//,
                    replacement: pathResolve('src/views/main') + '/',
                },
                {
                    find: /\/robot\//,
                    replacement: pathResolve('src/views/robot') + '/',
                },
            ],
        },
        server: {
            host: '0.0.0.0',
            port: 5656, // 设置服务启动端口号
            open: true, // 设置服务启动时是否自动打开浏览器
            cors: true, // 允许跨域

            // 设置代理，根据我们项目实际情况配置
            // proxy: {
            //   '/api': {
            //     target: 'http://xxx.xxx.xxx.xxx:8000',
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace('/api/', '/')
            //   }
            // }
        },
        build: {
            outDir: '../dist',
            rollupOptions: {
                input: {
                    main: pathResolve('src/views/main/index.html'),
                    robot: pathResolve('src/views/robot/index.html'),
                },
            },
        },
    };
});
function pathResolve(dir: string): string {
    return path.resolve(process.cwd(), '.', dir);
}
