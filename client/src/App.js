import React, { createContext, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Login from "./components/Login";
import Admin from "./components/Admin";

export const detailsContext = createContext();

const App = () => {
  const isAuth = false;
  const [popup, setPopup] = useState(false);
  const [editpopup, setEditPopup] = useState(false);
  const [viewNote, setviewNote] = useState(false);
  const [viewAlert, setAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editFormData, setEditFormData] = useState(null); // State to hold form data for editing
  const [s, is] = useState(true);
  const value = {
    popup: popup,
    setPopup: setPopup,
    editpopup: editpopup,
    viewNote: viewNote,
    viewAlert: viewAlert,
    setAlert: setAlert,
    setviewNote: setviewNote,
    setEditPopup: setEditPopup,
    editFormData: editFormData,
    setEditFormData: setEditFormData,
    deleteId: deleteId,
    setDeleteId: setDeleteId,
    s: s,
    is: is,
    todos: [], // Assuming you have a state to hold all todo items
  };

  return (
    <detailsContext.Provider value={value}>
      <div>{isAuth ? <Dashboard /> : <Admin />}</div>
      <Login />
    </detailsContext.Provider>
  );
};

export default App;
