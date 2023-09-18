import cls from './PostList.module.css';
import { PostItem } from '../PostItem/PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const PostList = (props) => {
  const {posts, remove, title} = props

  if(!posts.length) {
    return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
  }
  return (
    <div className={cls.PostList}>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <TransitionGroup>
      {posts.map((post, index) =>
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
        >
          <PostItem number={index + 1} post={post} remove={remove}/>
        </CSSTransition>)}
      </TransitionGroup>
    </div>
  );
};