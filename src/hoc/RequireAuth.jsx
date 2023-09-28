import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const withRequireAuth = (WrappedComponent) => {

    const RequireAuth = (props) => {
        const location = useLocation()
        const { user } = useAuth()

        if (!user) {
            return <Navigate to='/login' state={{ from: location }} replace />
        }

        return <WrappedComponent {...props} />
    }

    return RequireAuth
}