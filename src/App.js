import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import EditorDashboard from "./components/EditorDashboard";
import ViewerDashboard from "./components/ViewerDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/editor-dashboard" element={<EditorDashboard />} />
        <Route path="/viewer-dashboard" element={<ViewerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
