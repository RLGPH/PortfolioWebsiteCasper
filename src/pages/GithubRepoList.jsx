import React, { useEffect, useState } from 'react';
import GridShow from '../components/GridShow/GridShow';

const GithubRepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('http://[::1]:8080/api/Github');
        const data = await res.json();
        console.log('Fetched repos:', data);
        setRepos(data);
      } catch (err) {
        console.error('Failed to fetch repos', err);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>

      {repos.length > 0 ? (
        <GridShow
          allItems={repos}
          columns={3} 
          itemsPerPage={24} 
          pagination={true}
        />
      ) : (
        <p>Loading repos...</p>
      )}
    </div>
  );
};

export default GithubRepoList;