// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./Forms";
import DetailsPage from "./DetailsPage";

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forms onSubmit={handleFormSubmit} />} />
        <Route
          path="/details"
          element={<DetailsPage submittedData={submittedData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
