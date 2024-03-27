import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import { useContext } from 'react'
import Filter from './components/common/filter/Filter'
import Header from './components/common/header/Header'
import { AuthAdminContext } from './context/AuthAdminContext'

function App() {
  const { admin } = useContext(AuthAdminContext)

  const location = useLocation()



  return (
    <>
      <div
        className="grid min-h-screen grid-rows-[180px,1fr,100px]"
      >

        {!admin && <Header />}


        <section className=
          {`${!admin && "max-w-7xl py-8"} w-full mx-auto `}
        >

          {!admin && location.pathname != "/favorite" && <Filter />}

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
