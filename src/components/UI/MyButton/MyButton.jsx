import cls from './MyButton.module.css';

export const MyButton = ({children, ...props}) => {
  return (
      <button {...props} className={cls.MyButton}>
        {children}
      </button>
  );
};