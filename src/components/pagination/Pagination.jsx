import React from 'react'
import { useDispatch } from 'react-redux';
import { createPages } from '../../utils/pageCreator';

import "./pagination.less";


const Pagination = ({ setCurrentPage, currentPage, totalCount, perPage, pages}) => {

    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalCount / perPage);


    createPages(pages, pagesCount, currentPage);
    

  return (
 <div className="pages">
    {pages.map((page, index) => (
      <span
        key={index}
        className={currentPage == page ? "current-page" : "page"}
        onClick={() => dispatch(setCurrentPage(page))}
      >
        {page}
      </span>
    ))}
  </div>
  )
}

export default Pagination