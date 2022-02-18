import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Form from './components/Form/Form';
// import FormList from './components/FormList/FormList';
import UserPage from './components/UserPage/UserPage'
import Nav from './components/Nav/Nav'

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
    <Router>
      <div className="App">
      
      <Nav />
        <h1>LDAP APP</h1>
        <Switch>
          <Route path="/">
            <Form
              submit={addUser}
              btnText="Add User"
            />
          </Route>
          <Route path="/users">
            <UserPage />
          </Route>
      {/* {
        users.map(user =>
          <FormList
            {...user}
            key={user.id}
            deleteUser={deleteUser}
            editUser={editUser}
        />)
      } */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;