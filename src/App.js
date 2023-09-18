import { useMemo, useState } from 'react';
import { PostList } from './components/PostList/PostList';
import './App.css';
import { MyInput } from './components/UI/MyInput/MyInput';
import { MyButton } from './components/UI/MyButton/MyButton';
import { PostForm } from './components/PostForm/PostForm';
import { MySelect } from './components/UI/MySelect/MySelect';
import { PostFilter } from './components/PostFilter/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScrips', body:'Description 1'},
    {id: 2, title: 'Python', body: 'Decription 2'},
    {id: 3, title: 'C#', body: 'Description'}
  ])

 const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPost = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchPost = useMemo(() => {
      return sortedPost.filter((post) => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPost])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchPost.length ? <PostList posts={sortedAndSearchPost} remove={removePost} />: <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
    </div>
  );
}

export default App;
