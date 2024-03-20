import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/header/Navbar'

function App() {
  return (
    <>
      <div
        className="grid min-h-screen grid-rows-[150px,1fr,70px]"
      >
        {/* <main className='mx-auto w-full'> */}
        {/* <Outlet /> */}

        <Navbar />
        <section className="mx-auto w-full">
          <Outlet />
        </section>

        <Footer />
      </div>

    </>
  )

}

export default App
