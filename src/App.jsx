import Navbar from './components/common/header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default App
