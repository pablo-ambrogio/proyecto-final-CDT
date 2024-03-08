import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/header/Navbar'

function App() {

  return (
    <>
      <div
        className='h-full bg-white'
      >
<<<<<<<<< Temporary merge branch 1
        <Navbar />
        <section className='mx-auto w-full'>
=========
        <main className='mx-auto w-full'>
>>>>>>>>> Temporary merge branch 2
          <Outlet />
        </main>
        <Footer />
      </div >
    </>
  )

}

export default App
