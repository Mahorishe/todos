import { MyButton } from '../MyButton/MyButton';
import cls from './Pagination.module.css';

export const Pagination = (props) => {
  const {paginationArr, currentPage, setPage} = props
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