import { useState } from 'react';
import axios from 'axios';

function SearchUser() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/findUser?username=${username}`);
      setUsers(response.data);
      setErrorMessage('');
    } catch (error) {
      setUsers([]);
      setErrorMessage('No user found.');
    }
  };

  return (
    <div>
      <h1>Search for Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {users.length > 0 ? (
        <div>
          <h2>Users Found:</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
}

export default SearchUser;
