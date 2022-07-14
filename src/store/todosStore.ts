import { Todo } from "types";
import axios from "utils/axios";
import create from "zustand";

interface State {
  loading: boolean;
  loaded: boolean;
  error: string;
  todos: Todo[];
  fetchTodos: () => void;
  deleteAllTodo: () => void;
}

const useTodos = create<State>((set) => ({
  loading: true,
  loaded: false,
  error: "",
  todos: [],
  deleteAllTodo() {
    set({ todos: [], loaded: false });
  },
  fetchTodos: async () => {
    try {
      set({ loading: true, loaded: false, error: "", todos: [] });
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
