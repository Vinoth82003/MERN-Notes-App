import React, { useContext } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import EditForm from "./EditForm";
import ViewNotes from "./ViewNotes";
import Delete from "./Delete";
import { detailsContext } from "../App";

export const Dashboard = () => {
  const value = useContext(detailsContext);
  return (
    <>
      <Header setPopup={value.setPopup} />
      <TodoList />
      {value.popup && <TodoForm />}
      {value.editpopup && <EditForm />}
      {value.viewNote && <ViewNotes />}
      {value.viewAlert && <Delete />}
    </>
  );
};
