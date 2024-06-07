import "./App.css";
import Todos from "./components/Todos";
import React, { useState } from "react";

function App() {
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};

export default App;
