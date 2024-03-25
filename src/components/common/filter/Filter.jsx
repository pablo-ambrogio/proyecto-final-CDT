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
            className="text-[#010101] md:w-8/12 mx-auto px-3"
        >
            <div
            >
                <h3
                    className="inline-block bg-grey py-2 px-4 rounded-md"
                    onClick={handleFilter}
                >Filtrar por categoria</h3>
            </div>
            <div
                className={`${!filter && "hidden"} flex justify-center gap-x-4 uppercase`}
            >
                {
                    categories.map(category => {
                        return (
                            <>
                                <div key={category.id}
                                    onClick={hanldeText}
                                >
                                    <label htmlFor={category.name}
                                        className={`${isCheck && "text-red"} text-blue`}
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
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Filter