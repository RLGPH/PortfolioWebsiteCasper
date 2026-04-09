import React, { useEffect, useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/items/${item.id}`);
        if (!res.ok) throw new Error('Failed to fetch item');
        const json = await res.json();

        setData({ ...json, id: json.id ?? item.id });
      } catch (err) {
        console.error(err);
        setData({ readme: 'No data available', url: item.url, id: item.id });
      }
    };

    if (!item.readme) fetchItem();
    else setData({ ...item, id: item.id });
  }, [item]);

  if (!data) return <div className="item-card">Loading...</div>;

  const localLink = `${window.location.origin}/${data.id ?? 0}`;

  return (
    <a href={localLink} className="item-card">
      <h3 className="repo-title">{data.url?.split('/').pop() || 'Unknown'}</h3>
      <p className="repo-readme">{data.readme || 'No README available'}</p>
    </a>
  );
};

export default ItemCard;