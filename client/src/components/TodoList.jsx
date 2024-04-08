import React, { useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import { detailsContext } from "../App";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const value = useContext(detailsContext);
  // console.log(is,s);
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    console.log(window.location.host);
    console.log(window.location.pathname);
    try {
      const response = await fetch("http://192.168.15.88:5000/api/todos");
      // console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);
      setTodos((prev) => data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    // setisSubmited(false);
  }, [value.s]);

  return (
    <div className="ul">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
      ) : (
        <TodoForm />
      )}
    </div>
  );
};

export default TodoList;
