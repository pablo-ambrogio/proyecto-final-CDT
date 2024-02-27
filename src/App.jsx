import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <div
        className='h-full bg-white'
      >
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
