import FormCategories from "../../common/admin/formCategories/FormCategories"

const AdminCategories = () => {
    return (
        <div className="text-[#010101]  min-h-screen">
            <div className="h-full flex flex-col justify-center gap-y-8 bg-secondary">
                <h1 className="text-center text-2xl text-white">Agregando Categorias</h1>
                <section
                    className='w-full bg flex justify-center items-center'
                >
                    <FormCategories />
                </section>
            </div>
        </div>
    )
}
export default AdminCategories