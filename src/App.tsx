import React from "react";
import { NavLink } from "react-router-dom";
import Routers from "routers";

const App = () => {
  return (
    <div>
      <NavLink to="/">Counter</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <Routers />
    </div>
  );
};

export default App;
