import Menu from '../../../assets/menu.svg'
import MenuClose from '../../../assets/menu-close.svg'
import Navbar from './Navbar'
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
            <header className={`flex flex-col lg:sticky top-0 h-auto py-4 z-10 bg-gradient-to-t from-degrade to-secondary`}>
                <section className="w-full text-secondary max-w-7xl mx-auto">
                    <div className="lg:hidden flex justify-end cursor-pointer w-11/12 mx-auto" onClick={handleMenu}>
                        <img src={`${menu ? MenuClose : Menu}`} alt="menú" className="text-white" />
                    </div>
                    <div className={`${!menu ? "hidden" : "h-auto"} lg:block`}>
                        <Navbar />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
