import LogoFooter from '../../../assets/logo-footer.svg'
import LogoSiglas from '../../../assets/BlancoShort 1.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full h-full bg-primary">
            <div className="w-full h-full flex justify-between items-center max-w-7xl mx-auto">
                <div
                    className='w-full'
                >
                    <Link to={"/"}>
                        <img src={LogoSiglas} alt={'Logo página web'} width={40} />
                    </Link>
                </div>
                <nav className="w-full text-center uppercase">
                    <Link to={'/about-us'}>sobre nosotros</Link>
                </nav>
                <picture className='flex justify-end w-full h-full'>
                    <img src={LogoFooter} alt={'Auto que aprece en el logo'} width={150} />
                </picture>
            </div>
        </footer>
    )
}
export default Footer
