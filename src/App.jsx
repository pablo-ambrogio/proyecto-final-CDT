import Navbar from './components/common/header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <div
        className='h-full bg-white'
      >
<<<<<<< HEAD
        <Navbar />
        <section className='mx-auto w-full'>
=======
        <main className='mx-auto w-full'>
>>>>>>> pablo
          <Outlet />
        </main>
        <Footer />
      </div >
    </>
  )

}

export default App
