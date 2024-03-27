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
        className="grid min-h-screen grid-rows-[180px,1fr,100px]"
      >
        <Header />
        <section className="mx-auto max-w-7xl w-full py-8">
          {
            !pathname.includes("/favorite") & !isPathnameAdmin &&
            <Filter />
          }
          <Outlet />
        </section>
        <Footer />
      </div>

    </>
  )
}

export default App
