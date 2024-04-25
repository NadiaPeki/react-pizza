import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

function Pagination({ totalPages }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);

  const onChangePage = (event) => {
    dispatch(setCurrentPage(event));
  };
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
