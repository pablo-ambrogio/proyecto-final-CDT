import axios from "axios"
import { useContext, useState } from "react";
import { useEffect } from "react";
import { FilterContext } from "../../../context/FilterContext";
import { Link } from "react-router-dom";

const Filter = () => {

    const { check, setCheck, vehicles } = useContext(FilterContext)

    const [categories, setCategories] = useState([])
    const [filter, setFilter] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const getCategory = async () => {
        const { data } = await axios.get("http://localhost:3000/categories")
        setCategories(data);
    }

    const handleCheck = e => {
        console.log(e);
        const { value } = e.target
        const { checked } = e.target
        if (checked) {
            const vehiclesFilter = vehicles.filter(vehicle => vehicle.category === value)
            setCheck([...check, ...vehiclesFilter])

        }
        else {
            const vehiclesFilter = check.filter(vehicle => vehicle.category !== value)
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
                                    className="px-4 py-2 border border-secondary rounded-md text-sm"
                                >
                                    <label htmlFor={category.name}
                                        className={`${isCheck && " text-primary"} text-secondary cursor-pointer`}
                                    >
                                        <input type="checkbox"
                                            className="hidden"
                                            id={category.name}
                                            name={category.name}
                                            value={category.name}
                                            onChange={handleCheck}
                                        />
                                        {category.name}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}
export default Filter