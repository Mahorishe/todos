import cls from './PostList.module.css';
import { PostItem } from '../PostItem/PostItem';

export const PostList = (props) => {
  const {posts, remove} = props
  return (
    <div className={cls.PostList}>    
      {posts.map((post, index) => <PostItem key={post.id} number={index + 1} post={post} remove={remove}/>)}
    </div>
  );
};