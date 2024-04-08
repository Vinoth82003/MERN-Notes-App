import React, { useState, useEffect } from "react";
import "../css/admin.css";
import logo from "../assets/img/notes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faDownload,
  faList12,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  // Initialize state for holding current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div className="admin_page">
        <div className="nav">
          <div className="app_name">
            <div className="app_logo">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="appName">Mini Notes</h1>
          </div>
        </div>
        <div className="body">
          <div className="inner_body">
            <div className="inner_head">
              <div className="user">
                Role: <div className="title tag">Admin</div>
              </div>
              <div className="time">
                <div className="icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="timer">{currentTime.toLocaleTimeString()}</div>
              </div>
            </div>
            <div className="tableContainer">
              <div className="table_options">
                <div className="search">
                  <input type="search" name="search" id="search" />
                </div>
                <div className="inner_options">
                  <button type="button">
                    <FontAwesomeIcon icon={faList12} />
                  </button>
                  <button type="button">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
              </div>
              <table className="userTable">
                <tr>
                  <th>sno</th>
                  <th>user name</th>
                  <th>email</th>
                  <th>no of notes</th>
                  <th>account created</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>john doe</td>
                  <td>johndoe@example.com</td>
                  <td>10</td>
                  <td>10/08/2021 12: PM</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>john doe</td>
                  <td>johndoe@example.com</td>
                  <td>10</td>
                  <td>10/08/2021 12: PM</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>john doe</td>
                  <td>johndoe@example.com</td>
                  <td>10</td>
                  <td>10/08/2021 12: PM</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>john doe</td>
                  <td>johndoe@example.com</td>
                  <td>10</td>
                  <td>10/08/2021 12: PM</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
