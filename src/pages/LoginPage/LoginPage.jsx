import { MyButton } from '../../components/UI/MyButton/MyButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signIn } = useAuth()
    const formLocation = location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const user = form.username.value

        signIn(user, () => navigate(formLocation, { replace: true }))
    }

    return <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input name='username' />
            <MyButton type='submit'>Войти</MyButton>
        </form>
    </div>
}