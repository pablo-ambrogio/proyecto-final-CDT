import LogoHeader from '../../../assets/LogoRojo 1.svg'
import Menu from '../../../assets/BurguerMenu.svg'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import Navbar from './Navbar'
import NavSearch from './NavSearch'
import { useContext, useEffect, useState } from 'react'
import { NavBarContext } from '../../../context/NavbarContext'

const Header = () => {

    const { menu, setMenu } = useContext(NavBarContext)

    const [width, setWidth] = useState(window.innerWidth)

    const handleMenu = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            if (width > 800) {
                setMenu(false)
                console.log(width);
            }
        })
    }, [width])

    return (
        <>
            <header className={`flex flex-col sticky top-0 py-4 z-10 bg-gradient-to-t from-degrade to-secondary`}>
                <section className="w-full text-secondary max-w-7xl mx-auto">
                    <div className="lg:hidden flex justify-end cursor-pointer w-11/12 mx-auto" onClick={handleMenu}>
                        <img src={Menu} alt="menú" className="text-white" />
                    </div>
                    <div className={`${!menu ? " hidden" : "h-screen"} lg:block`}>
                        <Navbar />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
