import { useMemo, useState } from 'react';
import { PostList } from './components/PostList/PostList';
import './App.css';
import { MyInput } from './components/UI/MyInput/MyInput';
import { MyButton } from './components/UI/MyButton/MyButton';
import { PostForm } from './components/PostForm/PostForm';
import { MySelect } from './components/UI/MySelect/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScrips', body:'Description 1'},
    {id: 2, title: 'Python', body: 'Decription 2'},
    {id: 3, title: 'C#', body: 'Description'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPost = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchPost = useMemo(() => {
    console.log('RENDER sorted and search')
      return sortedPost.filter((post) => post.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
  }, [searchQuery, sortedPost])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <div>
        <MyInput 
          value={searchQuery}
          placeholder="Поиск..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка" 
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]} 
        />
      </div>
      {sortedAndSearchPost.length ? <PostList posts={sortedAndSearchPost} remove={removePost} />: <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
    </div>
  );
}

export default App;
