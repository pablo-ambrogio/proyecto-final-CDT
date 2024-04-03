import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import { useContext } from 'react'
import Filter from './components/common/filter/Filter'
import Header from './components/common/header/Header'
import { AuthAdminContext } from './context/AuthAdminContext'

function App() {
  const { admin } = useContext(AuthAdminContext)

  const location = useLocation()

  console.log(location.pathname.includes("/vehicles"));

  return (
    <>
      <div
        className={`grid min-h-screen ${admin ? 'grid-rows-[auto,1fr]' : 'grid-rows-[auto,1fr,100px]'}`}
      >

        {!admin && <Header />}

        <section className=
          {`${!admin && "max-w-7xl py-8"} w-full mx-auto `}
        >

          {
            (!admin && !location.pathname.includes("/favorite") && !location.pathname.includes("/vehicles"))
            && <Filter />
          }
          <Outlet />
        </section>

        {
          !admin && <Footer />
        }
      </div >

    </>
  )
}

export default App
