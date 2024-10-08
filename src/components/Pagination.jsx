import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav className="pagination-container">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Previous
      </button>

      <button className="pagination-button current-page">{currentPage}</button>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
