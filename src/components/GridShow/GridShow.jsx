import React, { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './GridShow.css';

const GridShow = ({ allItems }) => {
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="grid-container">
        {currentItems.map((item, index) => {
          const url = typeof item === 'string' ? item : item.url;
          return <ItemCard key={index} url={url} />;
        })}
      </div>

      <div className="pagination">
        <button onClick={goPrev} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={goNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default GridShow;