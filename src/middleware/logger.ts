import { GetState, SetState, State, StateCreator, StoreApi } from "zustand";

export const log =
  <T extends State>(config: any): StateCreator<T> =>
  (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) =>
    config(
      (args: T): void => {
        set({ middleware: true, ...args });
      },
      get,
      api
    );
