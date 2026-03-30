import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GithubCommitLog = () => {
  const { id } = useParams();

  const [repo, setRepo] = useState(null);
  const [readme, setReadme] = useState('');
  const [commits, setCommits] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const res = await fetch(`http://[::1]:8080/api/Github/${id}`);
        const data = await res.json();
        setRepo(data);

        const url = data.url;
        const parts = url.split('/');
        const owner = parts[3];
        const repoName = parts[4];

        // Fetch README
        const readmeRes = await fetch(
          `https://api.github.com/repos/${owner}/${repoName}/readme`
        );

        if (readmeRes.ok) {
          const readmeData = await readmeRes.json();
          const decoded = atob(readmeData.content);
          setReadme(decoded.replace(/[#>*`]/g, ''));
        }

        // Fetch commits
        const commitsRes = await fetch(
          `https://api.github.com/repos/${owner}/${repoName}/commits`
        );

        if (commitsRes.ok) {
          const commitsData = await commitsRes.json();
          setCommits(commitsData);
        }

      } catch (err) {
        console.error('Error loading repo details', err);
      }
    };

    fetchRepo();
  }, [id]);

  if (!repo) return <p>Loading...</p>;

  const repoName = repo.url.split('/').pop();

  const visibleCommits = showAll ? commits : commits.slice(0, 6);

  return (
    <div style={{ padding: '20px' }}>
      {/* Title */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {repoName}
      </h1>

      {/* Repo link */}
      <a href={repo.url} target="_blank" rel="noopener noreferrer">
        {repo.url}
      </a>

      {/* README */}
      <div style={{ marginTop: '20px' }}>
        <h2>README</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{readme}</pre>
      </div>

      {/* Commits */}
      <div style={{ marginTop: '20px' }}>
        <h2>Commits</h2>

        {visibleCommits.map((commit, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{commit.commit.message}</strong>
            <br />
            <small>
              {commit.commit.author.name} —{' '}
              {new Date(commit.commit.author.date).toLocaleString()}
            </small>
          </div>
        ))}

        {!showAll && commits.length > 6 && (
          <button onClick={() => setShowAll(true)}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default GithubCommitLog;