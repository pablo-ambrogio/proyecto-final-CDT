import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
<<<<<<< HEAD
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

=======
// import Navbar from './components/common/header/Navbar'
import Header from './components/common/header/Header'

function App() {
    return (
        <>
            <div className="grid min-h-screen grid-rows-[150px,1fr,70px]">
                <Header />
                <section className="mx-auto w-full">
                    <Outlet />
                </section>
                <Footer />
            </div>
        </>
    )
>>>>>>> 69999d9 (avances con buscador)
}

export default App