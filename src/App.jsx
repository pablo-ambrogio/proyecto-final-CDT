
import Navbar from './components/common/header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <h1>Titulo</h1>
      <div
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )

}

export default App
