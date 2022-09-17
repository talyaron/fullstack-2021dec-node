import axios from "axios";
import { useState } from "react";
import UserAPI from "../Components/UserAPI";

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
          <UserAPI name={user.name} phone={user.phone} website={user.website} />
        );
      })}
    </div>
  );
};

export default GetAllUsers;
