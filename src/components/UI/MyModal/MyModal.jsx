import cls from './MyModal.module.css';

export const MyModal = (props) => {
  const {visible, setVisible, children} = props
  const rootClasses = [cls.MyModal]
  if(visible){
    rootClasses.push(cls.MyModalActive)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cls.MyModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};