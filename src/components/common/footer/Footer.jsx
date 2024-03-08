import LogoFooter from '../../../assets/logo-footer.svg'
import LogoSiglas from '../../../assets/BlancoShort 1.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full h-full bg-red sticky bottom-0">
            <div className="w-11/12 h-full flex justify-between items-center mx-auto">
                <img src={LogoSiglas} alt={'Logo página web'} />
                <nav className="w-1/2 flex justify-evenly uppercase">
                    <Link to={'/about-us'}>sobre nosotros</Link>
                </nav>
                <div>
                    <img className="mt-[-40%]" src={LogoFooter} alt={'Auto que aprece en el logo'} />
                </div>
            </div>
        </footer>
    )
}
export default Footer
