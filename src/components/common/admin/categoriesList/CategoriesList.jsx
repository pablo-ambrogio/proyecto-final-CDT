import axios from "axios"
import { useEffect, useState } from "react"

const CategoriesList = () => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {

        const { data } = await axios.get("http://localhost:3000/categories")

        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [categories])

    console.log(categories);

    return (
        <div
            className="h-screen"
        >
            <section
                className="w-full grid justify-center mt-8 uppercase"
            >
                <table>
                    <thead className="uppercase text-center border border-blue">
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
                    <tbody className="border border-blue">
                        {
                            categories.map(category => {
                                return (
                                    <tr className="grid grid-cols-[50px,1fr,1fr] border border-blue" key={category.id}>
                                        <td className="col-span-1 justify-self-center">
                                            <img src={category.icon} alt="" />
                                        </td>
                                        <td className="col-span-1">
                                            {category.name}
                                        </td>
                                        <td className="col-span-1">
                                            {category.description}
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