import 'react-app-polyfill/stable';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => setEmployees(data.data));
  }, [])
  return (
    <div className="App">
      Foo
      <ul>
        {employees.map(employee => (
          <li className="employee" key={employee.id}>{employee.employee_name}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
