import React, { useEffect, useState } from 'react';
import GridShow from '../components/GridShow/GridShow';

const Home = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('http://casp142b2.web.techcollege.dk/api/Github');
        const data = await res.json();
        console.log('Fetched repos:', data);

        const shuffled = [...data].sort(() => Math.random() - 0.5);

        setRepos(shuffled.slice(0, 3));
      } catch (err) {
        console.error('Failed to fetch repos', err);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>Portefølje</h1>
      <div>
        <p>This is the home page. Use the navigation to explore the app.</p>
      </div>

      <div>
        <h1>3 Random GitHub Repositories</h1>

        {repos.length > 0 ? (
          <GridShow
            allItems={repos}
            columns={3} 
            itemsPerPage={3} 
            pagination={false} 
          />
        ) : (
          <p>Loading repos...</p>
        )}
      </div>

      <div>
        <h2>About Me</h2>
        <p>I am a passionate developer with experience in many technologies.</p>
        <p>many of the technologies i have worked with include.</p>
        <ul className='LeftAlign'>
          <li>JavaScript</li>
          <li>React</li>
          <li>SQL</li>
          <li>EntityFramwork</li>
          <li>Docker</li>
          <li>Git</li>
          <li>Kubernetes</li>
          <li>C#</li>
          <li>Python</li>
          <li>XML</li>
        </ul>
        <p></p>
      </div>
    </div>
  );
};

export default Home;