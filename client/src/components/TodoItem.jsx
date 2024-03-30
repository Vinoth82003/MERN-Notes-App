import React, { useContext } from "react";
import "../css/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { detailsContext } from "../App";

const TodoItem = ({ todo }) => {
  const value = useContext(detailsContext);
  function handleDelete() {
    value.setDeleteId(todo._id);
    value.setAlert(true);
  }

  function openEdit() {
    let data = {
      id: todo._id,
      title: todo.title,
      description: todo.description,
    };
    value.setEditPopup(true);
    value.setEditFormData((prev) => data);
    // console.log({
    //   id: id,
    //   title: todo.title,
    //   description: todo.description,
    // });
  }

  function openView() {
    let data = {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      lastUpdate: todo.lastUpdate,
    };
    value.setviewNote(true); // Correct setter function
    value.setEditFormData(data); // Setting form data
  }

  return (
    <div className="list">
      <div className="version">{todo.__v}</div>
      <h3 className="title">{todo.title}</h3>
      <p className="discription">
        <p>{todo.description}</p>
        {todo.description.length > 397 ? (
          <span className="readMore">....</span>
        ) : (
          ""
        )}
      </p>
      <p className="createdAt">Created At : {todo.createdAt}</p>
      <div className="buttons">
        <button type="button" className="view" onClick={openView}>
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button type="button" className="edit" onClick={openEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button type="button" className="delete" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
