import create from "zustand";

interface State {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = create<State>((set, get) => ({
  counter: 0,
  increment: () => set({ counter: get().counter + 1 }),
  decrement: () => set({ counter: get().counter - 1 }),
  reset: () => set({ counter: 0 }),
}));

export default useCounter;
