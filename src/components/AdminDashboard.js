import React, { useState } from "react";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { username: "admin", role: "admin", activity: "Logged in" },
    { username: "editor", role: "editor", activity: "Edited content" },
    { username: "viewer", role: "viewer", activity: "Viewed content" },
  ]);

  const [newUser, setNewUser] = useState({ username: "", role: "" });
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    if (newUser.username && newUser.role) {
      setUsers([...users, { ...newUser, activity: "No activity yet" }]);
      setNewUser({ username: "", role: "" });
    }
  };

  const handleRemoveUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  const handleViewActivity = (username) => {
    const user = users.find((user) => user.username === username);
    setSelectedUser(user);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <h3>Manage Users</h3>
      <div className="add-user">
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <h3>Existing Users</h3>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            <span>{user.username} - {user.role}</span>
            <button onClick={() => handleViewActivity(user.username)}>
              View Activity
            </button>
            <button onClick={() => handleRemoveUser(user.username)}>Remove</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className="user-activity">
          <h3>Activity for {selectedUser.username}</h3>
          <p>{selectedUser.activity}</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
