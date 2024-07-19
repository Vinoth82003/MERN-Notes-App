import React, { useContext, useState, useEffect } from "react";
import "../css/form.css";
import { detailsContext } from "../App";

const EditForm = () => {
  const value = useContext(detailsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // UseEffect to set the form data when editFormData changes
  useEffect(() => {
    console.log(value.editFormData);
    if (value.editFormData) {
      setTitle(value.editFormData.title);
      setDescription(value.editFormData.description);
    }
  }, [value.editFormData]);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  async function handleEdit(id, e) {
    console.log("edit function called");
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        value.is((prev) => {
          console.log("prev value ", prev);
          return !prev;
        });
        value.setEditPopup(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="form_container">
        <div className="inner_form">
          <button
            type="button"
            className="close"
            onClick={() => value.setEditPopup(false)}
          >
            X
          </button>
          <h2>Update Note</h2>
          <form onSubmit={(event) => handleEdit(value.editFormData.id, event)}>
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
            </div>
            <button type="submit">✔️ Update Notes</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditForm;
