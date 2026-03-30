import React, { useEffect, useState, useRef } from 'react';
import './ItemCard.css';

// Simple in-memory cache
const readmeCache = {};

const ItemCard = ({ item }) => {
  const [readme, setReadme] = useState('');
  const fetchedRef = useRef(false);

  const url = item?.url;
  const name = url ? url.split('/').pop() : 'Unknown';

  useEffect(() => {
    if (!url || fetchedRef.current) return;
    fetchedRef.current = true;

    const fetchReadme = async () => {
      try {
        if (readmeCache[url]) {
          setReadme(readmeCache[url]);
          return;
        }

        const parts = url.split('/');
        const owner = parts[3];
        const repo = parts[4];

        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/readme`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json'
            }
          }
        );

        if (!res.ok) {
          setReadme('README unavailable (rate limited/none exist)');
          return;
        }

        const data = await res.json();
        const decoded = atob(data.content);

        const cleaned = decoded.replace(/[#>*`]/g, '');

        readmeCache[url] = cleaned;

        setReadme(cleaned);
      } catch {
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