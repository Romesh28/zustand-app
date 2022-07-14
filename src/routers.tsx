import React from "react";
import { Route, Routes } from "react-router-dom";
import { Counter, Todos } from "pages";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Counter />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default Routers;
