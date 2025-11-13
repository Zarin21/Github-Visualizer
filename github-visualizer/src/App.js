import React, { useState } from 'react'
import RepoInput from './components/RepoInput'
import Graph from './components/Graph'
import { fetchCommitGraph } from './utils/githubAPI'

function App() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] })

  const handleRepoSubmit = async ({ owner, repo }) => {
    try {
      const data = await fetchCommitGraph(owner, repo)
      setGraphData(data)
    } catch (err) {
      alert(
        'Failed to load commit history. Check the repo URL or GitHub rate limits.'
      )
    }
  }

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
        fontFamily:
          "'Bitcount Grid Single', 'Bitcount Prop Single', monospace1",
      }}
    >
      <h1
        style={{
          color: 'white',
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textShadow: `
      -1px -1px 0 rgba(168, 85, 247, 0.8),
      1px -1px 0 rgba(168, 85, 247, 0.8),
      -1px 1px 0 rgba(168, 85, 247, 0.8),
      1px 1px 0 rgba(168, 85, 247, 0.8),
      0 0 20px rgba(168, 85, 247, 0.6)
    `,
        }}
      >
        GitHub Commit Graph
      </h1>
      <RepoInput onSubmit={handleRepoSubmit} />
      <Graph nodes={graphData.nodes} edges={graphData.edges} />
    </div>
  )
}

export default App
