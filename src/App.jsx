import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'

function App() {

  return (
    <>
      <h1>Titulo</h1>
      <div
      >
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
