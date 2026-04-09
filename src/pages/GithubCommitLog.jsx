import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GithubCommitLog = () => {
  const { id } = useParams();
  const [repo, setRepo] = useState(null);
  const [commits, setCommits] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        // Fetch API
        const res = await fetch(`https://project-itjnj.vercel.app/api/github/${id}`);
        const data = await res.json();

        setRepo(data);
        setCommits(data.commits || []);
      } catch (err) {
        console.error('Failed to fetch repo data from API', err);
      }
    };

    fetchRepoData();
  }, [id]);

  if (!repo) return <p>Loading...</p>;

  const repoName = repo.url.split('/').pop();
  const visibleCommits = showAll ? commits : commits.slice(0, 6);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{repoName}</h1>
      <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.url}</a>

      <div style={{ marginTop: '20px' }}>
        <h2>README</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{repo.readme || 'No README available'}</pre>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Commits</h2>
        {visibleCommits.map((commit, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <strong>{commit.message}</strong>
            <br />
            <small>
              {commit.author} — {new Date(commit.date).toLocaleString()}
            </small>
          </div>
        ))}
        {!showAll && commits.length > 6 && (
          <button onClick={() => setShowAll(true)}>Load more</button>
        )}
      </div>
    </div>
  );
};

export default GithubCommitLog;