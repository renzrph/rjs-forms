// DetailsPage.js
import React from "react";

const DetailsPage = ({ submittedData }) => {
  return (
    <div>
      <h2>Submitted Details:</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsPage;
