/*
 * @Author: your name
 * @Date: 2021-11-19 16:18:05
 * @LastEditTime: 2021-12-13 11:20:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \view\types\axios.d.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  urlPrefix?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface RAxiosRequestConfig extends AxiosRequestConfig {
  loading?: boolean;
}

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  joinParamsToUrl?: boolean;
  formatDate?: boolean;
  isTransformResponse?: boolean;
  isReturnNativeResponse?: boolean;
  joinPrefix?: boolean;
  apiUrl?: string;
  errorMessageMode?: ErrorMessageMode;
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  withToken?: boolean;
}

export interface Result<T = any> {
  code: number;
  message: string;
  data: T;
}

export abstract class AxiosTransform {
  beforeRequestHook?: (config: RAxiosRequestConfig, options: RequestOptions) => RAxiosRequestConfig;

  transformRequestHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  requestInterceptors?: (
    config: RAxiosRequestConfig,
    options: CreateAxiosOptions
  ) => RAxiosRequestConfig;

  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  requestInterceptorsCatch?: (error: Error) => void;

  responseInterceptorsCatch?: (error: Error) => void;
}
