import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiDemo() {
  const [users, setUsers] = useState(null);
  const [count, setCount] = useState(0);
  async function getUsers(signal) {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios.get(url, { signal });
    const users = res.data;
    setUsers(users);
    console.log(users);
  }
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    getUsers(signal);
    return () => {
      abortController.abort();
    };
  }, [count]); //dependency array
  return (
    <>
      <h1>API called</h1>
      <div>
        {users &&
          users.map((user) => {
            const { id, name, email, username } = user;
            return (
              <div key={id}>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
              </div>
            );
          })}
        <button
          onClick={() => {
            console.log("Api called");
            setCount((count) => count + 1);
          }}
        >
          click
        </button>
      </div>
    </>
  );
}
