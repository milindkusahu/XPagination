import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([]);

  console.log(userData);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_URL =
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

        const data = await fetch(API_URL);
        const res = await data.json();
        setUserData(res);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="main">
      <h1>Employee Data Table</h1>
      <div className="table-container">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          {userData.map(({ id, name, email, role }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default App;
