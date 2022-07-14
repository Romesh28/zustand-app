import { Todo } from "types";
import axios from "utils/axios";
import create from "zustand";

const initialState = {
  loading: true,
  loaded: false,
  error: "",
  todos: [],
};

interface State {
  loading: boolean;
  loaded: boolean;
  error: string;
  todos: Todo[];
  fetchTodos: () => void;
  deleteAllTodo: () => void;
}

const useTodos = create<State>((set, get) => ({
  ...initialState,
  deleteAllTodo() {
    set({ todos: [], loaded: false });
  },
  fetchTodos: async () => {
    try {
      set(initialState);
      const todos: Todo[] = await (await axios("/todos")).data;
      set({ todos, loading: false, loaded: todos.length > 0 });
    } catch (e) {
      set({
        loading: false,
        loaded: false,
        todos: [],
        error: "Ошибка: Что то пошло не так",
      });
    }
  },
}));

export default useTodos;
