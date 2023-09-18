import { useMemo, useState } from 'react';
import { PostList } from './components/PostList/PostList';
import './App.css';
import { MyInput } from './components/UI/MyInput/MyInput';
import { MyButton } from './components/UI/MyButton/MyButton';
import { PostForm } from './components/PostForm/PostForm';
import { MySelect } from './components/UI/MySelect/MySelect';
import { PostFilter } from './components/PostFilter/PostFilter';
import { MyModal } from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScrips', body:'Description 1'},
    {id: 2, title: 'Python', body: 'Decription 2'},
    {id: 3, title: 'C#', body: 'Description'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visible, setVisible] = useState(false)

  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }
  return (
    <div className="App">
      <MyButton onClick={() => setVisible(true)}>Создать пост</MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchPost} remove={removePost} />
    </div>
  );
}

export default App;
