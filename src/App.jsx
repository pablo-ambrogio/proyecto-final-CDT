import Navbar from './components/common/header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <div
        className='h-full bg-white'
      >
        <Navbar />
        <section className='max-w-7xl mx-auto w-full h-5/6'>
          <Outlet />
        </section>
        <Footer />
      </div >
    </>
  )

}

export default App
