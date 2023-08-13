import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchUser() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getUsers');
      setUsers(response.data);
      setErrorMessage('');
    } catch (error) {
      setUsers([]);
      setErrorMessage('Error fetching users.');
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      {users.length > 0 ? (
        <div>
          <h2>Users Found:</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <hr />
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
