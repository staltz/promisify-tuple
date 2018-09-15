declare type CBAPI = (...args: Array<any>) => void;
declare function run<T>(api: CBAPI): (...args: Array<any>) => Promise<[any, T]>;
export = run;
