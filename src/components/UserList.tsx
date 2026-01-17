import { useEffect, useState } from "react";
import { users } from "../utils/users";
import Counter from "./Counter";

function UserList() {
  const [persons, setPersons] = useState(users);
  const [inputValue, setInputValue] = useState("");
  const [clicked, setOnClicked] = useState(false);

  useEffect(() => {
    if (!inputValue) return;
    setPersons((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: inputValue,
      },
    ]);
  }, []);

  return (
    <div>
      <div>
        <h2>Add User</h2>

        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            placeholder="Nama"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button onClick={() => setOnClicked(!clicked)}>Tambah</button>
        </div>
      </div>
      <div>
        <h2>User List</h2>

        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <Counter />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
