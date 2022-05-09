import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form/Form';
import FormList from './components/FormList/FormList';

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios.get("http://localhost:8000/getUsers")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const addUser = (newUser) => {
    axios.post("http://localhost:8000/addUser", newUser)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data])
        // console.log(res.data)
      })
    .catch(err => console.log(err))
  }

  const deleteUser = (user_id) => {
    axios.delete(`http://localhost:8000/delete/${user_id}`)
      .then(res => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== user_id))
      })
    .catch(err => console.log(err))
  }

  const editUser = (updates, user_id) => {
    axios.put(`http://localhost:8000/edit/${user_id}`, updates)
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
      <div className="form-wrapper">
        <h1>CRUD App with Hooks</h1>
      <div className="section-heading">
        <h2>Add User</h2>
      </div>
        <Form
          submit={addUser}
          btnText="Add User"
        />
      </div>
      <div className="view-wrapper">
        <h2>View Users</h2>
      <div className="view-container">
        <h3>Name</h3>
        <h3>Username</h3>
        <h3>Actions</h3>
      </div>
      <hr />
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
      </div>
  );
}

export default App;