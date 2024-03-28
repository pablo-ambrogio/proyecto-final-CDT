import LogoHeader from '../../../assets/LogoRojo 1.svg'
import Menu from '../../../assets/BurguerMenu.svg'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import Navbar from './Navbar'
import NavSearch from './NavSearch'
import { useState } from 'react'

const Header = () => {

    const [menu, setMenu] = useState(false)


    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <header className="flex flex-col sticky top-0 bg-blue2 py-8 z-10 bg-gradient-to-t from-degrade to-secondary">
                <section className="w-full text-secondary max-w-7xl mx-auto">
                    <div className="lg:hidden flex justify-end cursor-pointer" onClick={handleMenu}>
                        <img src={Menu} alt="menú" className="text-white" />
                        {/* </a> */}
                    </div>
                    <div className={`${!menu && "hidden"}`}>
                        <Navbar />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
