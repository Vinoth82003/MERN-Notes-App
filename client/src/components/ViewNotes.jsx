import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/view.css";
import { detailsContext } from "../App";

const ViewNotes = () => {
  const value = useContext(detailsContext);
  const [allDatas, setAllData] = useState(null);

  useEffect(() => {
    console.log(value.editFormData);
    if (value.editFormData) {
      setAllData(value.editFormData);
    }
  }, [value.editFormData]);

  const handleCopyToClipboard = () => {
    document.querySelector(".copy").style.background = "#49c6ff";
    document.querySelector(".copy").style.color = "#fff";
    // Combine title, description, createdAt, and lastUpdate into one string
    const textToCopy = `Title: ${allDatas.title}\nDescription: ${allDatas.description}\nCreated At: ${allDatas.createdAt}\nLast Update: ${allDatas.lastUpdate}`;

    // Use the navigator.clipboard API to copy the text to the clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
    setTimeout(() => {
      document.querySelector(".copy").style.background = "#dfdfdf";
      document.querySelector(".copy").style.color = "rgb(96, 96, 255)";
    }, 1000);
  };

  function handleEdit() {
    value.setEditPopup(true);
    value.setviewNote(false);
  }
  function handleDelete() {
    value.setAlert(true);
    value.setDeleteId(allDatas.id);
  }

  return (
    <div className="page">
      <div className="inner_page">
        <div className="options">
          <div className="edit" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div className="delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
          <div className="copy" onClick={handleCopyToClipboard}>
            <FontAwesomeIcon icon={faCopy} />
          </div>
          <div className="close" onClick={() => value.setviewNote(false)}>
            x
          </div>
        </div>
        {allDatas && (
          <>
            <p className="title">Title: {allDatas.title}</p>
            <div className="description">
              <strong>Description:</strong> <p>{allDatas.description}</p>
            </div>
            <div className="dates">
              <p>
                <strong>Created At:</strong> {allDatas.createdAt}
              </p>
              <p>
                <strong>Last Update:</strong> {allDatas.lastUpdate}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewNotes;
