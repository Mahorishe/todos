import { useState } from 'react';
import { PostList } from './components/PostsList/PostList';
import './App.css';
import { MyInput } from './components/UI/MyInput/MyInput';
import { MyButton } from './components/UI/MyButton/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScrips', body:'Description 1'},
    {id: 2, title: 'Python', body: 'Decription 2'},
    {id: 3, title: 'C#', body: 'Description'}
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }
  return (
    <div className="App">
      <form>
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
      <PostList posts={posts} remove={removePost} />
    </div>
  );
}

export default App;
