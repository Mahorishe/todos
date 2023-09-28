import { withRequireAuth } from '../../hoc/RequireAuth'

const MainPage = () => {
    return (
        <div>
            Главная
        </div>
    )
}

export const RequireMainPage = withRequireAuth(MainPage)