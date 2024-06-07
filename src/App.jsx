import "./App.css";
import Todos from "./components/Todos";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Project NAS DIY",
      completed: false,
    },
    {
      id: 2,
      title: "Istirahat dan Makan Siang",
      completed: false,
    },
    {
      id: 3,
      title: "Finish Course ReactJS Progate",
      completed: false,
    },
  ]);

  console.log(todos);

  return (
    <div>
      <h1>My Todo List</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
