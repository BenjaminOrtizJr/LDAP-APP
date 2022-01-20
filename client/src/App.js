import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form/Form';

function App() {

  return (
    <div className="App">
      <h1>LDAP APP</h1>
      <Form
        // submit={addUser}
        btnText="Add User"
      />

    </div>
  );
}

export default App;
