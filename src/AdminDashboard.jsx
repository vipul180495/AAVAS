import React, { useState, useEffect } from 'react';
import './ReviewViewing.css';
export const AdminDashboard = () => {
  const [branchData, setBranchData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch ('http://localhost:2023/AdminDashboard');
      if (!response.ok) {
        console.warn(`An error has occurred:`);
      } else {
        const data = await response.json();
        setBranchData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='review-viewing'>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Branch No.</th>
            <th>City</th>
            <th>Number of Properties</th>
            <th>Number of Employees</th>
          </tr>
        </thead>
        <tbody>
          {branchData.map((branch) => (
            <tr key={branch.branchNo}>
              <td>{branch.branchNo}</td>
              <td>{branch.city}</td>
              <td>{branch.numProperties}</td>
              <td>{branch.numEmployees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

