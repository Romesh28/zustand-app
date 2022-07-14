import React, { useEffect } from "react";
import { useTodos } from "store";
import shallow from "zustand/shallow";

const Todos = () => {
  const { todos, loading, fetchTodos, error, loaded, deleteAllTodo } = useTodos(
    (state) => state,
    shallow
  );
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <h1>Todos Page</h1>
      <button className="btn btn-danger" onClick={deleteAllTodo}>
        delete all todo
      </button>
      <button className="btn btn-primary" onClick={fetchTodos}>
        retry
      </button>
      {loading && <p>Загрузка...</p>}
      {!loading && error && <p className="text-danger">{error}</p>}
      {!loading && !loaded && !error && <p>Список пустой</p>}
      {loaded && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
};

export default Todos;
