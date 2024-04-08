import React, { useState, useEffect } from "react";
import "../css/admin.css";
import logo from "../assets/img/notes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faDownload,
  faEye,
  faList12,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx"; // Importing Excel library
import male from "../assets/img/male.jpeg";
import female from "../assets/img/female.jpeg";

const Admin = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const initialUserData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      notes: 3,
      created: "10/08/2021 12:00 PM",
      gender: "male",
      notes_details: [
        { title: "Note 1", time: "10:00 AM" },
        { title: "Note 2", time: "11:00 AM" },
        { title: "Note 3", time: "12:00 PM" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      notes: 2,
      created: "11/15/2021 09:30 AM",
      gender: "female",
      notes_details: [
        { title: "Note 1", time: "09:00 AM" },
        { title: "Note 2", time: "10:00 AM" },
      ],
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      notes: 4,
      created: "09/25/2021 03:45 PM",
      gender: "female",
      notes_details: [
        { title: "Note 1", time: "01:00 PM" },
        { title: "Note 2", time: "02:00 PM" },
        { title: "Note 3", time: "03:00 PM" },
        { title: "Note 4", time: "04:00 PM" },
      ],
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bobbrown@example.com",
      notes: 3,
      created: "07/03/2021 11:20 AM",
      gender: "male",
      notes_details: [
        { title: "Note 1", time: "09:00 AM" },
        { title: "Note 2", time: "10:00 AM" },
        { title: "Note 3", time: "11:00 AM" },
      ],
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emilydavis@example.com",
      notes: 3,
      created: "06/12/2021 05:00 PM",
      gender: "female",
      notes_details: [
        { title: "Note 1", time: "02:00 PM" },
        { title: "Note 2", time: "03:00 PM" },
        { title: "Note 3", time: "04:00 PM" },
      ],
    },
    {
      id: 6,
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      notes: 5,
      created: "08/02/2021 10:10 AM",
      gender: "male",
      notes_details: [
        { title: "Note 1", time: "09:00 AM" },
        { title: "Note 2", time: "10:00 AM" },
        { title: "Note 3", time: "11:00 AM" },
        { title: "Note 4", time: "12:00 PM" },
        { title: "Note 5", time: "01:00 PM" },
      ],
    },
  ];

  const [userData, setUserData] = useState(initialUserData);

  const [isGrid, setGrid] = useState(false);
  const [filteredData, setFilteredData] = useState(userData); // State for filtered data

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    let newData;
    if (value === "all") {
      newData = userData;
    } else {
      newData = userData.filter(
        (user) =>
          user.name.toLowerCase().includes(value) ||
          user.email.toLowerCase().includes(value)
      );
    }
    setFilteredData(newData || []); // Ensure that newData is never null or undefined
  };

  const handleDownload = () => {
    const fileName = "Mini Notes Users.xlsx";
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");
    XLSX.writeFile(workbook, fileName);
  };

  const Table = () => {
    return (
      <>
        <div className="tableContainer">
          <table className="userTable">
            <thead>
              <tr>
                <th>sno</th>
                <th>user name</th>
                <th>email</th>
                <th>no of notes</th>
                <th>account created</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.notes}</td>
                  <td>{user.created}</td>
                  <td>
                    <button type="button">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const Grid = () => {
    return (
      <div className="grid_container">
        <ul className="inner_grid">
          {filteredData.map((user) => (
            <li key={user.id} className="grid_user">
              <div className="grid_head">
                <div className="prof_imgae">
                  <img
                    src={user.gender === "male" ? male : female}
                    alt={user.gender}
                  />
                </div>
                <div className="user_det">
                  <h1 className="title">{user.name}</h1>
                  <p className="date">{user.created}</p>
                </div>
              </div>
              <ul className="grid_body">
                <li className="body_title">No Of Notes : {user.notes}</li>
                {user.notes_details.map((note, index) => (
                  <li key={index} className="notes_details">
                    <div className="note_title">{note.title}</div>
                    <p className="createTime">At: {note.time}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };

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
            <div className="table_options">
              <div className="search">
                <button type="button" onClick={handleSearch}>
                  All
                </button>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search here ..!"
                  onInput={handleSearch}
                />
              </div>
              <div className="inner_options">
                <button
                  onClick={() => setGrid(false)}
                  className={isGrid ? "" : "active"}
                >
                  <FontAwesomeIcon icon={faList12} />
                </button>
                <button
                  onClick={() => setGrid(true)}
                  className={isGrid ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </button>
                <button type="button" onClick={handleDownload}>
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
            {isGrid ? <Grid /> : <Table />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
