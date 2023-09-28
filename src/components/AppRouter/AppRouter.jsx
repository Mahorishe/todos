import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { AuthProvider } from '../../hoc/AuthProvider'
import { RequireMainPage } from '../../pages/MainPage/MainPage'
import { RequirePostsPage } from '../../pages/PostsPage/PostsPage'
import { RequirePostPage } from '../../pages/PostPage/PostPage'

export const AppRouter = () => {
    return (<div className='container'>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<RequireMainPage />} />
                <Route path='/posts' element={<RequirePostsPage />} />
                <Route path='/todos' element={<Navigate to='/posts' replace />} />
                <Route path='/posts/:id' element={<RequirePostPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </AuthProvider>
    </div>)
}