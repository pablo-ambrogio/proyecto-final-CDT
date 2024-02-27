import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <div
        className='h-full bg-blue'
      >
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
