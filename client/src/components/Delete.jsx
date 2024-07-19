import React, { useContext, useEffect, useState } from "react";
import "../css/delete.css";
import { detailsContext } from "../App";
const Delete = () => {
  const value = useContext(detailsContext);
  const [id, setId] = useState(null);
  useEffect(() => {
    console.log(value.deleteId);
    if (value.deleteId) {
      setId(value.deleteId);
    }
  }, [value.deleteId]);

  function handleCancel() {
    value.setDeleteId(null);
    value.setAlert(false);
  }

  async function handleConfirm() {
    try {
      const response = await fetch(`hthttp://localhost:5000/api/todos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        value.setviewNote(false);
        console.log("Todo item deleted successfully");
        value.is((prev) => {
          console.log("delete log ", prev);
          return !prev;
        });
        handleCancel();
      } else {
        console.error("Failed to delete todo item");
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <div className="form_container deleteAlert">
        <div className="alert">
          <button type="button" className="close" onClick={handleCancel}>
            X
          </button>
          <h2 className="title">Detele Confirmation</h2>
          <p className="message">
            Are you sure do you want to delete the above Notes
          </p>
          <div className="footer-buttons">
            <button
              type="button"
              className="btn-confirm"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
