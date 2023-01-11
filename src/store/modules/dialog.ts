import { defineStore } from 'pinia';
import { nextTick } from 'vue';
interface DialogContent {
    type: string;
    content: string;
    title?: string;
}
export const useDialogStore = defineStore({
    id: 'dialog',
    state: () => ({
        dialogContentArr: [
            {
                type: 'system',
                content: '智能咨询即将接入为您服务',
            },
            {
                type: 'robot',
                content:
                    '您好，我是@龙华智能客服小龙！ 咨询【民生服务】【防疫政策】【劳 动纠纷】，小龙在线秒回哦~',
            },
        ] as DialogContent[],
        audioEl: undefined as HTMLAudioElement | undefined,
    }),
    getters: {
        getDialogContentArr: (state) => state.dialogContentArr,
        getAudio: (state) => state.audioEl,
    },
    actions: {
        addDialogContent(dialogContent: DialogContent) {
            this.dialogContentArr.push({ ...dialogContent });
            nextTick(() => {
                const el = document.querySelector(
                    '.robot .robot-content',
                ) as HTMLElement;
                el.scrollTop = el.scrollHeight;
            });
        },
        saveAudio(audio: HTMLAudioElement) {
            // , updatePlayStatus: () => void
            // updatePlayStatus();
            this.audioEl != null && (this.audioEl.currentTime = 0);
            this.audioEl = audio;
        },
    },
});
