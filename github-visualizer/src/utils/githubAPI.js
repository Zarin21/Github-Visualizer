import axios from "axios";

export async function fetchCommitGraph(owner, repo, branch = "main") {
  const nodes = [];
  const edges = [];
  const seen = new Set();

  try {
    const commitsRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      {
        params: { sha: branch, per_page: 100 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    const commits = commitsRes.data;

    for (const commit of commits) {
      const sha = commit.sha;
      const message = commit.commit.message.split("\n")[0];

      if (!seen.has(sha)) {
        seen.add(sha);
        nodes.push({
          id: sha,
          label: message,
          title: `Author: ${commit.commit.author.name}\n${commit.commit.author.date}`,
        });
      }

      for (const parent of commit.parents) {
        edges.push({ from: sha, to: parent.sha });
      }
    }
  } catch (err) {
    console.error("Failed to fetch GitHub commits:", err);
    throw err;
  }

  return { nodes, edges };
}
