import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div class="text-md lg:flex-grow flex justify-center gap-24">
                <Link
                    to="/"
                    className="uppercase font-bold block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-red over:transition-in-out duration-300 mr-4"
                >
                    vehículos
                </Link>
                <Link
                    to="/offers"
                    className="uppercase font-bold block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-red over:transition-in-out duration-300 mr-4"
                    onClick={() =>
                        alert(
                            'Estamos trabajando para darte las mejores ofertas del mercado'
                        )
                    }
                >
                    ofertas
                </Link>
                <Link
                    to="/offers"
                    className="uppercase font-bold block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-red over:transition-in-out duration-300 mr-4"
                    onClick={() =>
                        alert(
                            'Pronto podrás seleccionar tus opciones favoritas'
                        )
                    }
                >
                    favoritos
                </Link>
            </div>
        </>
    )
}

export default Navbar
