import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/header/Navbar'

function App() {
  return (
    <>
      <div
        className="grid min-h-screen grid-rows-[150px,1fr,70px]"
      >
<<<<<<< HEAD
        <main className='mx-auto w-full'>
            <Outlet />
=======
        <Navbar />
        <main className="mx-auto w-full">
          <Outlet />
>>>>>>> b32fe732a5c7aa1fbbb3ab7c657fdc75d1c4c2db
        </main>
        <Footer />
      </div>

    </>
  )

}

export default App
