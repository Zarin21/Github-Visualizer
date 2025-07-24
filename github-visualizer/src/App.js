import React, { useState } from "react";
import RepoInput from "./components/RepoInput";
import Graph from "./components/Graph";
import { fetchCommitGraph } from "./utils/githubAPI";

function App() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  const handleRepoSubmit = async ({ owner, repo }) => {
    try {
      const data = await fetchCommitGraph(owner, repo);
      setGraphData(data);
    } catch (err) {
      alert(
        "Failed to load commit history. Check the repo URL or GitHub rate limits."
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        fontFamily:
          "'Bitcount Grid Single', 'Bitcount Prop Single', monospace1",
      }}
    >
      <h1>GitHub Commit Graph</h1>
      <RepoInput onSubmit={handleRepoSubmit} />
      <Graph nodes={graphData.nodes} edges={graphData.edges} />
    </div>
  );
}

export default App;
