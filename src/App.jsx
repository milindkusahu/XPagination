import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import Pagination from "./components/Pagination";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const API_URL =
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

        const data = await fetch(API_URL);
        const res = await data.json();
        setUserData(res);
        setLoading(false);
      } catch (err) {
        alert("failed to fetch data");
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main">
      <h1>Employee Data Table</h1>
      <Post loading={loading} posts={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={userData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
