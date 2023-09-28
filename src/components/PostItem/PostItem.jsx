import { Link } from "react-router-dom";
import { MyButton } from '../UI/MyButton/MyButton';
import cls from './PostItem.module.css';


export const PostItem = (props) => {
    const {post, remove} = props
    return (
        <div className={cls.PostItem}>
            <div>
                <h3>{post.id}. {post.title}</h3>
                {post.body}
            </div>
            <div>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
                <Link to={`/posts/${post.id}`}>
                    <MyButton>Открыть</MyButton>
                </Link>
            </div>
        </div>
    );
};