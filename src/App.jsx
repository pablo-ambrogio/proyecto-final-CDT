import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/header/Navbar'

function App() {
<<<<<<< HEAD
    return (
        <>
            <div
                // className='h-full bg-white'
                className="grid min-h-screen grid-rows-[150px,1fr,70px]"
            >
                <Navbar />
                <main className="mx-auto w-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
=======

  return (
    <>
      <div
        className='h-full bg-white'
      >
        <main className='mx-auto w-full'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
>>>>>>> pablo
}

export default App
