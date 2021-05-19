interface CB<T = any> {
  (err?: any, x?: T): void;
}
declare interface CBAPI<Ret> {
  (a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, a9: any, cb: CB<Ret>): any
  (a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, cb: CB<Ret>): any
  (a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, cb: CB<Ret>): any
  (a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, cb: CB<Ret>): any
  (a1: any, a2: any, a3: any, a4: any, a5: any, cb: CB<Ret>): any
  (a1: any, a2: any, a3: any, a4: any, cb: CB<Ret>): any
  (a1: any, a2: any, a3: any, cb: CB<Ret>): any
  (a1: any, a2: any, cb: CB<Ret>): any
  (a1: any, cb: CB<Ret>): any
  (cb: CB<Ret>): any
}
declare function run<T>(api: CBAPI<T>): (...args: Array<any>) => Promise<[any, T]>;
export = run;
