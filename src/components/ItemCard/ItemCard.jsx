import React, { useEffect, useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ url }) => {
  const [readme, setReadme] = useState('');
  const name = url ? url.split('/').pop() : 'Unknown';

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        if (!url) return;

        // Extract owner + repo from URL
        const parts = url.split('/');
        const owner = parts[3];
        const repo = parts[4];

        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/readme`
        );

        if (!res.ok) throw new Error('No README');

        const data = await res.json();

        // Decode base64 content
        const decoded = atob(data.content);
        setReadme(decoded);
      } catch (err) {
        console.warn('No README found for', name);
        setReadme('No README available.');
      }
    };

    fetchReadme();
  }, [url]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="item-card"
    >
      <h3 className="repo-title">{name}</h3>
      <p className="repo-readme">{readme}</p>
    </a>
  );
};

export default ItemCard;