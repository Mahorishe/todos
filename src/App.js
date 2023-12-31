import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { AppRouter } from './components/AppRouter/AppRouter'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>)
}

export default App
