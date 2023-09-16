import cls from './MyInput.module.css';

export const MyInput = (props) => {
  return (
    <input className={cls.MyInput} {...props}/>
  );
};