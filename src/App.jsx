import './App.css'
import Navbar from './components/common/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
