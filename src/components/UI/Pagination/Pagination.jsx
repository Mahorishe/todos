import { usePagintation } from '../../../hooks/usePagination'
import cls from './Pagination.module.css';

export const Pagination = (props) => {
  const {totalPage, currentPage, setPage} = props
  const paginationArr = usePagintation(totalPage)
  return (
    <div className={cls.Pagination}>
      {paginationArr.map((page) => (
        <span 
          key={page} 
          className={page === currentPage ? [cls.PaginationBtnActive, cls.PaginationBtn].join(' ') : cls.PaginationBtn}
          onClick={() => setPage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};