import UserCard from "../components/UserCard";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Users() {
  const [users, setUsers] = useState(null);
  const getUsers = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setUsers(res.data?.users);
  };
  useEffect(() => {
    getUsers();
  }, [users]);
  return (
    <div className="row">
      {users &&
        users.map((user) => {
          return (
            <div key={user.id} className="col-md-4 col-sm-6 mb-3">
              <UserCard user={user} />
            </div>
          );
        })}
    </div>
  );
}
