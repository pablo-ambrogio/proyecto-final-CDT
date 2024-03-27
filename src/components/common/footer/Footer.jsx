import LogoFooter from '../../../assets/logo-footer.svg'
import LogoSiglas from '../../../assets/BlancoShort 1.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-degrade to-secondary">
            <div className="w-full h-full flex justify-between items-center max-w-7xl mx-auto px-4">
                <div
                    className='w-full'
                >
                    <Link to={"/"}>
                        <img src={LogoSiglas} alt={'Logo página web'} width={40} />
                    </Link>
                </div>
                <nav className="w-full text-center uppercase">
                    <Link to={'/about-us'}
                        className='hover:text-primary font-bold'
                    >sobre nosotros</Link>
                </nav>
                <picture className='flex justify-end w-full h-full'>
                    <img src={LogoFooter} alt={'Auto que aprece en el logo'} width={150} />
                </picture>
            </div>
        </footer>
    )
}
export default Footer
