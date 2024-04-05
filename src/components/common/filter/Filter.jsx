
import { useContext, useState } from "react";
import { useEffect } from "react";
import { FilterContext } from "../../../context/FilterContext";
import InputFilter from "../inputFilter/InputFilter";

const Filter = () => {

    const { check, setCheck, vehicles } = useContext(FilterContext)

    const [categories, setCategories] = useState([])
    const [filter, setFilter] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const getCategory = async () => {

        try {
            const response = await fetch(`http://localhost:8084/categoria/list`)
            const data = await response.json()
            setCategories(data)
        } catch (error) {
            console.error(error);
        }
        // const { data } = await axios.get("http://localhost:3000/categories")
        // setCategories(data);
    }

    const handleCheck = e => {
        console.log(e);
        const { value } = e.target
        const { checked } = e.target
        if (checked) {
            const vehiclesFilter = vehicles.filter(vehicle => vehicle.categoria.titulo === value)
            setCheck([...check, ...vehiclesFilter])

        }
        else {
            const vehiclesFilter = check.filter(vehicle => vehicle.categoria.titulo !== value)
            setCheck([...vehiclesFilter])
        }
    }

    const hanldeText = () => {
        setIsCheck(!isCheck)
    }

    const handleFilter = () => {
        setFilter(!filter)
    }

    useEffect(() => {
        getCategory()
        console.log(vehicles);
    }, [])

    return (
        <section
            className="text-[#010101] mx-auto px-4 w-11/12 md:w-full"
        >
            <div
                className=" flex flex-col gap-y-4 "
            >
                <h3
                    className="w-fit bg-grey py-2 px-4 rounded-lg  cursor-pointer"
                    onClick={handleFilter}
                >Filtrar por categoria</h3>
                <div
                    className={`${!filter && "hidden"} flex gap-x-4 uppercase`}
                >
                    {
                        categories.map(category => {
                            return (
                                <div key={category.id}
                                    onClick={hanldeText}
                                    className={`px-4 py-2 border border-secondary rounded-md text-sm  cursor-pointer`}
                                >
                                    <InputFilter category={category} handleCheck={handleCheck} isCheck={isCheck} />
                                    {/* <label htmlFor={category.titulo}
                                    className={``}
                                    >
                                        <input type="checkbox"
                                            className="hidden"
                                            id={category.titulo}
                                            name={category.titulo}
                                            value={category.titulo}
                                            onChange={handleCheck}
                                        />
                                        {category.titulo}
                                    </label> */}
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        </section >
    )
}
export default Filter