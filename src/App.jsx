import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/header/Navbar'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

  const {pathname} = useLocation()
  const [isPathnameAdmin, setIsPathnameAdmin] = useState(false)

  const getPathname = (path) => {
    path.includes("admin") ?
      setIsPathnameAdmin(true)
      :
      setIsPathnameAdmin(false)
  }

  useEffect(() => {
    getPathname(pathname)
  }, [pathname])

  return (
    <>
      <div
        className="grid min-h-screen grid-rows-[150px,1fr,70px]"
      >
        {
          !isPathnameAdmin &&
          <Navbar />
        }
        <section className="mx-auto w-full">
          <Outlet />
        </section>

        {
          !isPathnameAdmin &&
          <Footer />
        }
      </div>

    </>
  )

}

export default App