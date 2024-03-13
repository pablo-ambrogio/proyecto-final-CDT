import PhotoPerfil from '../../../../assets/dashboard/photoPerfil.svg'

const PhotoProfile = () => {
    return (
        <div className="h-28 flex gap-x-2 px-4">
            <img src={PhotoPerfil} width={90} alt="" />
            <div className='uppercase text-[#010101] flex flex-col justify-center'>
                <h2
                    className='text-lg'
                >brochero</h2>
                <h3
                    className='text-sm'
                >superadministrador</h3>
            </div>
        </div>
    )
}
export default PhotoProfile