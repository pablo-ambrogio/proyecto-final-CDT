import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <div
        className=' h-full bg-white'
      >
        <section className='mx-auto w-full'>
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App
