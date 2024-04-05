import { useEffect, useState } from "react"
import NotFound from '../../../../assets/iconCategories/icon-notfound.svg'

const CategoriesList = () => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {

        try {
            const response = await fetch("http://localhost:8084/categoria/list")
            const data = await response.json()
            console.log(data);
            setCategories(data)
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div
            className="h-screen"
        >
            <section
                className="w-full grid justify-center mt-8 uppercase"
            >
                <table>
                    <thead className="uppercase text-center border border-secondary">
                        <tr className="grid grid-cols-[50px,1fr,1fr]">
                            <th className="col-span-1">
                                Icon
                            </th>
                            <th className="col-span-1">
                                Titulo
                            </th>
                            <th className="col-span-1">
                                Descripcion
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border border-secondary">
                        {
                            categories.map(category => {
                                return (
                                    <tr className="grid grid-cols-[50px,1fr,1fr] border-[1px] place-content-center " key={category.id}>
                                        <td className="col-span-1  h-full w-full">
                                            <img src={NotFound} alt="icono de categoria" className="mx-auto"  />
                                        </td>
                                        <td className="col-span-1 border-x h-full pl-1">
                                            {category.titulo}
                                        </td>
                                        <td className="col-span-1 h-full pl-1">
                                            {category.descripcion}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default CategoriesList