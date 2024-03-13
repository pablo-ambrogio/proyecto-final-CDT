import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

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
}

export default App
