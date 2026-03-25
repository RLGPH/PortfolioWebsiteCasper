import React from 'react';
import './ItemCard.css';

const ItemCard = ({ url }) => {
  const name = url ? url.split('/').pop() : 'Unknown';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="item-card"
    >
      {name}
    </a>
  );
};

export default ItemCard;