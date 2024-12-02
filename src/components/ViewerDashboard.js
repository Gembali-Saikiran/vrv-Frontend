import React, { useEffect, useState } from "react";
import './ViewerDashboard.css';

const ViewerDashboard = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Simulating fetching data from the editor's content
    const editorContent = [
      { title: "Article 1", body: "This is article 1." },
      { title: "Article 2", body: "This is article 2." },
    ];
    setContent(editorContent);
  }, []);

  return (
    <div className="viewer-dashboard">
      <h2>Viewer Dashboard</h2>
      <h3>Available Content</h3>
      <ul className="content-list">
        {content.map((item, index) => (
          <li key={index} className="content-item">
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewerDashboard;
