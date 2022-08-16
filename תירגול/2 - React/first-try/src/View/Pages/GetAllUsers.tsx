import axios from "axios";
import { useState } from "react";

const GetAllUsers = () => {
  const [userFromAPI, setUserFromAPI] = useState([]);

  const handleGetUser = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUserFromAPI(data);
  };

  return (
    <div>
      <button onClick={handleGetUser}>Get User</button>
      {userFromAPI.map((user: any) => {
        return (
          <div className="user">
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllUsers;
