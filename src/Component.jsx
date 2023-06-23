import React from 'react'
import { useState, useEffect } from 'react';
// import Nav from './list/Nav';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredUsers = users.filter((user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
    
      <div className='container-bar'>
          <form onSubmit={handleSearch}>
        <input
          className='searchbar'
          type="text"
          placeholder="Type first name"
          value={searchTerm}
          onChange={handleChange}
          
        /> 
        <button type="submit">Search</button>
      </form>
     </div>
     
      <div className='container-avatar'>
      {searchResults.map((user) => (
        <div key={user.id}  >
          <span className='id-pop'>{user.id}</span>
                <div className='container'>
                <img src={user.avatar} alt="avatarimage" />
                </div>
                  <h4>{user.first_name}</h4>
              </div>
          ))}
      </div>
      
    </div>
  )
}

export default UserList
