import { useEffect, useState } from 'react';
import { PostList } from './components/PostList/PostList';
import { MyButton } from './components/UI/MyButton/MyButton';
import { PostForm } from './components/PostForm/PostForm';
import { PostFilter } from './components/PostFilter/PostFilter';
import { MyModal } from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostService';
import { getPage } from './components/utils/getPages';
import { usePagintation } from './hooks/usePagination';
import './App.css';
import { Pagination } from './components/UI/Pagination/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visible, setVisible] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    setTotalPage(getPage(response.headers['x-total-count'], limit))
  })

  const paginationArr = usePagintation(totalPage)

  useEffect(() => {
    fetchPosts()
  }, [page])

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
      {postError && <div>Произошла ошибка: {postError}</div>}
      {isPostLoading ? <div>Loading...</div> : <PostList posts={sortedAndSearchPost} remove={removePost} title="Список постов" />}
      <Pagination paginationArr={paginationArr} currentPage={page} setPage={setPage} />
    </div>
  );
}

export default App;
