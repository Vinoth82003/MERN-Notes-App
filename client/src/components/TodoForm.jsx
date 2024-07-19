import React, { useContext, useState } from "react";
// import TodoList from "./TodoList";
import "../css/form.css";
import { detailsContext } from "../App";

const TodoForm = () => {
  const value = useContext(detailsContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numOfChars, setNumOfChars] = useState(0);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    setNumOfChars(value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        console.log("Todo added successfully!");
        value.is((prev) => {
          console.log("prev value ", prev);
          return !prev;
        });
        setTitle("");
        setDescription("");
        setNumOfChars(0); // Reset the number of characters counter
      } else {
        console.error("Failed to add todo");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <>
      <div className="form_container">
        <div className="inner_form">
          <button
            type="button"
            className="close"
            onClick={() => value.setPopup(false)}
          >
            X
          </button>
          <h2>Add New Todo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                required
              ></textarea>
              <p className="remainingChars">
                No Of Chars : <span className="numofchars">{numOfChars}</span>
              </p>
            </div>
            <button type="submit">+ Add Notes</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
