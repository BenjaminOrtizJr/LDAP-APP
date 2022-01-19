import './App.css';

function App() {
  return (
    <div className="App">
      <h1>LDAP APP</h1>
      <div className="form">
        <label>Employee Name:</label>
        <input type="text" name="employeeName" />
        <label>Employee Phone Number:</label>
        <input type="text" name="employeePhone" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
