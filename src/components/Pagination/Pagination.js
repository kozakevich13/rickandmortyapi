import React from 'react';
import Button from 'react-bootstrap/Button';

const Pagination = ({ setPageNumber, pageNumber }) => {
  let next = () => {
    setPageNumber((pageNum) => {
      return pageNum + 1;
    });
  };

  let prev = () => {
    setPageNumber((pageNum) => {
      return pageNum - 1 <= 0 ? 0 : pageNum - 1;
    });
  };

  return (
    <>
      <div className="m-4 d-flex justify-content-center">
        <Button
          onClick={prev}
          className="mx-2"
          variant="primary"
          size="lg"
          disabled={pageNumber <= 0 ? true : false}
        >
          Prev
        </Button>
        <Button
          onClick={next}
          variant="primary"
          size="lg"
          disabled={pageNumber >= 240 ? true : false}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
