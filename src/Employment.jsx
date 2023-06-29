import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setEmployees(data.data));
  }, []);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
          <input
               className='searchbar'
        type="text"
        placeholder="Search by first name"
        value={searchQuery}
        onChange={handleSearchChange}
      />

<div className='container-avatar'>
      {filteredEmployees.map((employee) => (
        <div key={employee.id}  >
          <span className='id-pop'>{employee.id}</span>
                <div className='container'>
                <img src={employee.avatar} alt="avatarimage" />
                </div>
                  <h4>{employee.first_name}</h4>
              </div>
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;
