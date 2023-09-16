import { MyButton } from '../UI/MyButton/MyButton';
import cls from './PostItem.module.css';


export const PostItem = (props) => {
  const {post, number, remove} = props
  return (
    <div className={cls.PostItem}>
      <div>
        <h3>{number}. {post.title}</h3>
        {post.body}
      </div>
      <div>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};