import create from "zustand";

interface State {
    counter: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCounter = create<State>((set) => ({
    counter: 0,
    increment: () => set(({ counter }) => ({ counter: counter + 1 })),
    decrement: () => set(({ counter }) => ({ counter: counter - 1 })),
    reset: () => set(() => ({ counter: 0 })),
}));

export default useCounter;
