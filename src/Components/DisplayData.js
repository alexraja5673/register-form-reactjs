import React, { useContext } from "react";
import { FormContext } from "../FormContext";
import { useNavigate } from "react-router-dom";

const DisplayData = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  if (!formData) {
    return <p>No data available. Please submit the form.</p>;
  }

  return (
    <div className="container text-center mt-4">
      <h1>Submitted Data</h1>
      <table className="text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.birthdate}</td>
            <td>{formData.gender}</td>
            <td>{formData.email}</td>
            <td>{formData.phone}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default DisplayData;
