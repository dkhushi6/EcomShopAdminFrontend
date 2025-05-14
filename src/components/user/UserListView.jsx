import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListView = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:4010/alluser");
      if (res) {
        console.log(res.data.allUser);
        setUsers(res.data.allUser);
      }
      if (!res) {
        console.error("error in data fetching");
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserListView;
