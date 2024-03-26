import { Outlet } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Filter from './components/common/filter/Filter'
import Header from './components/common/header/Header'

function App() {
  const { pathname } = useLocation()
  const [isPathnameAdmin, setIsPathnameAdmin] = useState(false)

  const getPathname = path => {
    path.includes('admin')
      ? setIsPathnameAdmin(true)
      : setIsPathnameAdmin(false)
  }
  useEffect(() => {
    getPathname(pathname)
  }, [pathname])

  return (
    <>
      <div
        className="grid min-h-screen grid-rows-[150px,1fr,70px]"
      >
        {/* {
          !isPathnameAdmin &&
        } */}
        <Header />
        <section className="mx-auto w-full">
          {
            !pathname.includes("/favorite") & !isPathnameAdmin &&
            <Filter />
          }
          <Outlet />
        </section>

        {/* {
          !isPathnameAdmin &&
        } */}
        <Footer />
      </div>

    </>
  )
}

export default App
