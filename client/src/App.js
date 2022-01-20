import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form/Form';
import FormList from './components/FormList/FormList';

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios.get("https://localhost:3001/getUsers")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const addUser = (newUser) => {
    axios.post("https://localhost:3001/addUser", newUser)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data])
      })
    .catch(err => console.log(err))
  }

  const deleteUser = (user_id) => {
    axios.delete(`https://localhost:3001/deleteUser/${user_id}`)
      .then(res => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== user_id))
      })
    .catch(err => console.log(err))
  }

  const editUser = (updates, user_id) => {
    axios.put(`https://localhost:3001/edit/${user_id}`, updates)
      .then(res => {
        setUsers(prevUsers => prevUsers.map(user => user.id
        !== user_id ? user : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <h1>LDAP APP</h1>
      <Form
        submit={addUser}
        btnText="Add User"
      />
      {
        users.map(user =>
          <FormList
            {...user}
            key={user.id}
            deleteUser={deleteUser}
            editUser={editUser}
        />)
      }
    </div>
  );
}

export default App;
