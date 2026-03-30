import React, { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './GridShow.css';

const GridShow = ({
  allItems = [],
  columns = 3,
  itemsPerPage = 24,
  pagination = true
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // If pagination is OFF → show everything
  const effectiveItemsPerPage = pagination ? itemsPerPage : allItems.length;

  const totalPages = Math.ceil(allItems.length / effectiveItemsPerPage);
  const startIndex = (currentPage - 1) * effectiveItemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + effectiveItemsPerPage);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div>
      {/* Dynamic grid columns */}
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`
        }}
      >
        {currentItems.map((item, index) => (
          <ItemCard key={item.id || index} item={item} />
        ))}
      </div>

      {/* Only show pagination if enabled */}
      {pagination && totalPages > 1 && (
        <div className="pagination">
          <button onClick={goPrev} disabled={currentPage === 1}>
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button onClick={goNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default GridShow;