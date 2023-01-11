import { defineStore } from 'pinia';

type loadingConfig = Record<string, boolean>;
export const GlobalStore = defineStore({
    id: 'global',
    state: () => ({
        loading: {} as loadingConfig,
        spinning: false,
    }),
    getters: {
        getLoading: (state) => (key: string) => !!state.loading[key],
    },
    actions: {
        changeLoading(key: string, value: boolean) {
            this.loading[key] = value;
        },
        changeSpin(value: boolean) {
            this.spinning = value;
        },
    },
});
