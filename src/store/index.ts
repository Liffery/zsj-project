import type { App } from 'vue';
import { createPinia } from 'pinia';
import { GlobalStore } from './modules/global';

const store = createPinia();

export function setupStore(app: App<Element>): void {
    app.use(store);
    app.config.globalProperties.$store = GlobalStore();
}

export { store };
