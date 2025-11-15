# GitHub Commit Graph Visualizer

A beautiful, interactive web application that visualizes Git commit history as an interactive graph. Built with React and powered by the GitHub API, this tool helps you understand repository evolution at a glance.

🌐 **Live Demo:** [github-visualizer-pi.vercel.app](https://github-visualizer-pi.vercel.app/)

## Features

- **Interactive Graph Visualization**: View commit history as an interactive, hierarchical graph using vis-network
- **Direct GitHub Integration**: Fetches commit data directly from GitHub's API
- **Click to Explore**: Click any commit node to open it directly on GitHub
- **Easy to Use**: Simply paste any GitHub repository URL to visualize its commits

## Design

The application features a modern, eye-catching design with:
- Animated gradient background (purple to blue tones)
- Floating blob effects for visual depth
- Custom Bitcount font family for a unique aesthetic
- Smooth animations and hover effects
- Hierarchical left-to-right commit graph layout

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Zarin21/github-visualizer.git
cd github-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter a GitHub repository URL (e.g., `https://github.com/facebook/react`)
2. Click "Load Graph"
3. Explore the interactive commit history visualization
4. Click any commit node to view it on GitHub
5. Use mouse controls to:
   - **Zoom**: Scroll wheel
   - **Pan**: Click and drag
   - **Select**: Click on nodes

## Built With

- **React** - Frontend framework
- **vis-network** - Graph visualization library
- **axios** - HTTP client for API requests
- **GitHub API** - Commit data source
- **Bitcount Fonts** - Custom typography

## Project Structure
```
github-visualizer/
├── public/
│   ├── index.html          # Main HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Graph.js        # Graph visualization component
│   │   └── RepoInput.js    # Repository URL input form
│   ├── utils/
│   │   └── githubAPI.js    # GitHub API integration
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles and animations
└── package.json
```

## Key Features Explained

### Graph Visualization
- Hierarchical layout with commits flowing left to right
- Each node represents a commit with its message
- Edges show parent-child relationships between commits
- Color-coded nodes with hover effects
- Navigation buttons for easy graph exploration

### GitHub Integration
- Fetches up to 100 most recent commits
- Displays commit messages, authors, and dates
- Direct links to GitHub commit pages
- Works with any public GitHub repository

## Controls

- **Zoom In/Out**: Mouse wheel or navigation buttons
- **Pan**: Click and drag on empty space
- **Move Nodes**: Click and drag individual nodes
- **View Commit**: Click any node to open on GitHub
- **Tooltip**: Hover over nodes to see author and date

### Main Interface
<img width="1910" height="905" alt="image" src="https://github.com/user-attachments/assets/5c5fa9ee-ed65-4211-a6a6-998b80a19fb6" />


### Commit Graph Visualization
![Commit Graph](path/to/screenshot2.png)

### Interactive Features
![Interactive Features](path/to/screenshot3.png)

## Limitations

- GitHub API has rate limits (60 requests/hour for unauthenticated users)
- Currently fetches the last 100 commits from the main branch
- Requires public repositories (no authentication implemented)

## Future Enhancements

- [ ] GitHub OAuth integration for private repos
- [ ] Branch selection dropdown
- [ ] Commit filtering by author/date
- [ ] Search functionality within commits
- [ ] Multiple branch visualization

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [vis-network](https://visjs.github.io/vis-network/docs/network/) for the graph visualization library
- [GitHub API](https://docs.github.com/en/rest) for commit data
- [Bitcount Fonts](https://fonts.google.com/) for typography
- Deployed on [Vercel](https://vercel.com)





