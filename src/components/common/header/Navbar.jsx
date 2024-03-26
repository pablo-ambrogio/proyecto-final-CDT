import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="text-md lg:flex-grow flex justify-center gap-24">
                <Link
                    to="/"
                    className="uppercase font-bold lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                >
                    vehículos
                </Link>
                <Link
                    to="/offers"
                    className="uppercase font-bold  lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                    onClick={() =>
                        alert(
                            'Estamos trabajando para darte las mejores ofertas del mercado'
                        )
                    }
                >
                    ofertas
                </Link>
                <Link
                    to="/favorite"
                    className="uppercase font-bold lg:inline-block lg:mt-0 text-grey hover:text-primary over:transition-in-out duration-150"
                >
                    favoritos
                </Link>
            </div>
        </>
    )
}

export default Navbar
