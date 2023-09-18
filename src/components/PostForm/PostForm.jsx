import { useState } from 'react';
import { MyInput } from '../UI/MyInput/MyInput';
import { MyButton } from '../UI/MyButton/MyButton';
import cls from './PostForm.module.css';

export const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''})
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }
  return (
    <form className={cls.PostForm}>
    <MyInput 
      value={post.title} 
      onChange={(e) => setPost({...post, title: e.target.value})}
      placeholder="Название поста" />
    <MyInput
      value={post.body} 
      onChange={(e) => setPost({...post, body: e.target.value})}
      placeholder="Содержание поста" />
    <MyButton onClick={addNewPost}>Создать пост</MyButton>
  </form>
  );
};