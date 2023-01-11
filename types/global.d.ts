declare type Recordable<T = any> = Record<string, T>;

declare type Nullable<T> = T | null;

declare type TimeoutHandle = ReturnType<typeof setTimeout>;
