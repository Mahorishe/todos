import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import PostService from '../../API/PostService'
import { MyButton } from '../../components/UI/MyButton/MyButton'
import { withRequireAuth } from '../../hoc/RequireAuth'

const PostPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [fetchPost, isPostLoading, isPostError] = useFetching(async () => {
        const response = await PostService.getPost(id)
        setPost(response)
    })

    useEffect(() => {
        fetchPost()
    }, [id])

    const goBack = () => navigate(-1)
    return <>
        <MyButton onClick={goBack}>Назад</MyButton>
        {isPostLoading ? (
            <h1>Loading...</h1>
        ) : (
            post && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        )}
    </>
}

export const RequirePostPage = withRequireAuth(PostPage)