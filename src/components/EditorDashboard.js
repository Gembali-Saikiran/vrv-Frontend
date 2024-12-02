import React, { useState } from "react";
import './EditorDashboard.css';

const EditorDashboard = () => {
  const [content, setContent] = useState([
    { id: 1, title: "Article 1", body: "This is article 1." },
    { id: 2, title: "Article 2", body: "This is article 2." },
  ]);

  const [newContent, setNewContent] = useState({ title: "", body: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  // Add new content
  const handleAddContent = () => {
    if (newContent.title && newContent.body) {
      if (editingIndex !== null) {
        // Update existing content
        const updatedContent = [...content];
        updatedContent[editingIndex] = { ...newContent, id: content[editingIndex].id };
        setContent(updatedContent);
        setEditingIndex(null);
      } else {
        // Add new content
        setContent([...content, { ...newContent, id: Date.now() }]);
      }
      setNewContent({ title: "", body: "" });
    }
  };

  // Edit existing content
  const handleEditContent = (index) => {
    setNewContent(content[index]);
    setEditingIndex(index);
  };

  // Delete content
  const handleDeleteContent = (id) => {
    const updatedContentList = content.filter((item) => item.id !== id);
    setContent(updatedContentList);
  };

  return (
    <div className="editor-dashboard">
      <h2>Editor Dashboard</h2>
      <h3>Manage Content</h3>
      <div className="manage-content">
        <input
          type="text"
          placeholder="Content Title"
          value={newContent.title}
          onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
        />
        <textarea
          placeholder="Content Body"
          value={newContent.body}
          onChange={(e) => setNewContent({ ...newContent, body: e.target.value })}
        ></textarea>
        <button onClick={handleAddContent}>
          {editingIndex !== null ? "Update Content" : "Add Content"}
        </button>
      </div>

      <h3>Existing Content</h3>
      <div className="existing-content">
        <ul>
          {content.map((item, index) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <button onClick={() => handleEditContent(index)}>Edit</button>
              <button onClick={() => handleDeleteContent(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EditorDashboard;
