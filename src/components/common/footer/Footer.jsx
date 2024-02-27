import LogoFooter from '../../../assets/logo-footer.svg'
import LogoSiglas from '../../../assets/BlancoShort 1.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className='w-full h-16 bg-red'>
            <div
                className='w-11/12 h-full flex justify-between items-center mx-auto'
            >
                <img src={LogoSiglas} alt={'Logo página web'} />
                <nav
                    className='w-1/2 flex justify-evenly uppercase'
                >
                    {/* <Link to={'/institucional'}>
                        institucional
                    </Link> */}
                    {/* <Link to={'/negocio'}>
                        negocio
                    </Link> */}
                    {/* <Link to={'/para-ti'}>
                        para ti
                    </Link> */}
                    {/* <Link to={'/contacto'}>
                        contacto
                    </Link> */}
                    <Link to={'/nosotros'}>
                        sobre nosotros
                    </Link>
                </nav>
                <div>
                    <img
                        className='mt-[-40%]'
                        src={LogoFooter} alt={'Auto que aprece en el logo'} />
                </div>
            </div>
        </footer>
    )
}
export default Footer