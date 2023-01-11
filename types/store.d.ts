/*
 * @Author: your name
 * @Date: 2021-11-19 16:18:05
 * @LastEditTime: 2021-12-12 14:56:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \view\types\store.d.ts
 */
import { ComponentCustomProperties } from 'vue';
//import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    app: any;
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

interface UserInfo {
  // id: number;
  username: string;
  displayName: string;
  token: string;
}
