import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/header/Navbar'

function App() {
    return (
        <>
            <div className="h-full bg-white">
                <Navbar />
                <main className="mx-auto w-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
