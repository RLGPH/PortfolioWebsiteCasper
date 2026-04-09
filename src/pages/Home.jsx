import React, { useEffect, useState } from 'react';
import GridShow from '../components/GridShow/GridShow';

const Home = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://project-itjnj.vercel.app/api/github');
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
      <h1>Portfolio</h1>
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
        <p>there are also many other technologies i have worked with,</p>
        <p>but i have chosen show these on the list because they are technologies</p>
        <p>that i have worked alot with as of recent and or have the highest compitency with</p>
        <p>i am allways looking for new technologies to experiment with to broaden my horizons</p>
        <p>and i am allways looking for new projects to work on to gain more experience</p>
        <p>if you want to see what projects i have worked on you can go to the Github page i have</p>
        <p>in my navbar or if you want to go to my actual github profile it will be linked in my contact me page</p>
      </div>
    </div>
  );
};

export default Home;