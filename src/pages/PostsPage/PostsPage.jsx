import { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { usePosts } from '../../hooks/usePosts'
import PostService from '../../API/PostService'
import { PostFilter } from '../../components/PostFilter/PostFilter'
import { PostForm } from '../../components/PostForm/PostForm'
import { PostList } from '../../components/PostList/PostList'
import { MyButton } from '../../components/UI/MyButton/MyButton'
import { MyModal } from '../../components/UI/MyModal/MyModal'
import { Pagination } from '../../components/UI/Pagination/Pagination'
import { getPages } from '../../components/utils/getPages'
import cls from './PostsPage.module.css'
import { withRequireAuth } from '../../hoc/RequireAuth'


const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [visible, setVisible] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        setTotalPage(getPages(response.headers['x-total-count'], limit))
    })

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
        <div className={cls.Posts}>
            <MyButton onClick={() => setVisible(true)}>Создать пост</MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && <div>Произошла ошибка: {postError}</div>}
            {isPostLoading ? <div>Loading...</div> :
                <PostList posts={sortedAndSearchPost} remove={removePost} title='Список постов' />}
            <Pagination totalPage={totalPage} currentPage={page} setPage={setPage} />
        </div>
    )
}

export const RequirePostsPage = withRequireAuth(PostsPage)