import React, { useState } from "react";

function RepoInput({ onSubmit }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = url.match(/github\.com\/(.+?)\/(.+?)(?:\.git)?(?:\/.+)?$/);
    if (match) {
      const [, owner, repo] = match;
      onSubmit({ owner, repo });
    } else {
      alert("Invalid GitHub URL");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Enter GitHub repo URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "70%", padding: "0.5rem" }}
      />
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}
      >
        Load Graph
      </button>
    </form>
  );
}

export default RepoInput;
