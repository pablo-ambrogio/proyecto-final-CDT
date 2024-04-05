import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { years } from '../../../utils/utils'
import { NavBarContext } from "../../../../context/NavbarContext"

const AddVehicleControlado = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [yearsSelect, setYearsSelect] = useState([])
    const [vechicle, setVehicle] = useState({
        marca: "",
        categoria: "",
        color: "",
        matricula: "",
        observacion: "",
        modelo: "",
        serialMotor: "",
        year: "",
        isDisponible: false
    })

    // const { setDataForId, dataForId, searchDataForId } = useContext(NavBarContext)
    const { dataForId, setId } = useContext(NavBarContext)

    const getCategory = async () => {
        const response = await fetch("http://localhost:8084/categoria/list")
        const data = await response.json()
        setCategories(data);
    }

    const handleChange = e => {
        const { name, value } = e.target
        console.log(name, value);
        setVehicle({ ...vechicle, [name]: value })
    }

    const handleChecked = e => {
        const { name, checked } = e.target
        console.log(name, checked);
        setVehicle({ ...vechicle, [name]: checked })
    }

    const addVehicle = async settings => {
        try {
            const response = await fetch("http://localhost:8084/vehiculo/add", settings)
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const updateVehicle = async settings => {
        try {
            const response = await fetch(`http://localhost:8084/vehiculo/update/${id}`, settings)
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.error(error);
        }

    }

    const handleSubmit = e => {
        e.preventDefault()

        for (const key in vechicle) {
            if (typeof vechicle[key] === 'string') {
                vechicle[key] = vechicle[key].toLowerCase();
            }
        }

        if (id) {

            const categoryFilter = categories.find(category => category.titulo === vechicle.categoria)
            console.log(categoryFilter);

            const refactorizadoData = {
                id: vechicle.id,
                marca: vechicle.marca,
                modelo: vechicle.modelo,
                serialMotor: vechicle.serialMotor,
                color: vechicle.color,
                year: vechicle.year,
                matricula: vechicle.matricula,
                isDisponible: vechicle.isDisponible,
                isFav: false,
                observacion: vechicle.observacion,
                categoria: {
                    id: categoryFilter.id,
                    titulo: categoryFilter.titulo,
                    descripcion: categoryFilter.descripcion,
                    imagen: categoryFilter.imagen
                }
            }

            const settings = {
                method: 'PUT',
                body: JSON.stringify(refactorizadoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(refactorizadoData);
            updateVehicle(settings)
        } else {

            const categoryFilter = categories.find(category => category.titulo === vechicle.categoria)
            console.log(categoryFilter);
            const refactorizadoData = {
                marca: vechicle.marca,
                modelo: vechicle.modelo,
                serialMotor: vechicle.serialMotor,
                color: vechicle.color,
                year: vechicle.year,
                matricula: vechicle.matricula,
                isDisponible: vechicle.isDisponible,
                isFav: false,
                observacion: vechicle.observacion,
                categoria: {
                    id: categoryFilter.id,
                    titulo: categoryFilter.titulo,
                    descripcion: categoryFilter.descripcion,
                    imagen: categoryFilter.imagen
                }
            }
            console.log(refactorizadoData);
            const settings = {
                method: 'POST',
                body: JSON.stringify(refactorizadoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            addVehicle(settings)
        }

        navigate("/admin/vehicles-list")
    }

    useEffect(() => {
        const getYears = years()
        getCategory()
        setYearsSelect(getYears);
    }, [])

    useEffect(() => {

        setId(id)

    }, [id])

    useEffect(() => {
        setVehicle(dataForId)
    }, [dataForId])


    return (
        <section className="w-full text-[#010101] max-w-7xl mx-auto text-lg flex justify-center items-center">
            <div className="w-4/5 p-4 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <h1
                        className="text-center text-2xl text-secondary uppercase mb-8"
                    >
                        {
                            id ? "Actualización de vehículo" :
                                "Carga de vehiculo"
                        }
                    </h1>
                    <section className="bg-grey text-[#010101] p-8 flex flex-col gap-y-2 rounded-lg">
                        <h2 className="text-xl">Información del vehiculo</h2>
                        <p>
                            Los campos obligatorios van seguidos de
                            <strong>
                                <abbr title="required"> *</abbr>.
                            </strong>
                        </p>
                        <fieldset>
                            <legend className="mb-8 text-center text-2xl">
                                Vehículo
                            </legend>
                            {
                                Object.keys(vechicle).length > 0 &&
                                <ul className="grid grid-cols-[1fr,1fr] gap-8 first-letter:uppercase">

                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="brand"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Marca
                                                <input
                                                    type="text"
                                                    name="marca"
                                                    value={vechicle.marca}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.brand?.message}</span> */}
                                    </li>
                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="model"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Modelo
                                                <input
                                                    type="text"
                                                    name="modelo"
                                                    id="model"
                                                    value={vechicle.modelo}
                                                    // value={model}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.model?.message}</span> */}
                                    </li>
                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="category"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Categoria
                                                <select
                                                    name="categoria"
                                                    id="category"
                                                    value={vechicle.categoria}
                                                    // value={category}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                >
                                                    <option>
                                                        Selec. una categoria
                                                    </option>
                                                    {
                                                        categories.map(category => {
                                                            return (
                                                                <option
                                                                    key={category.id}
                                                                    value={category.titulo}>
                                                                    {category.titulo}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.category?.message}</span> */}
                                    </li>

                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="serialMotor"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Serial motor
                                                <input
                                                    type="text"
                                                    name="serialMotor"
                                                    id="serialMotor"
                                                    value={vechicle.serialMotor}
                                                    // value={serialMotor}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.serialMotor?.message}</span> */}
                                    </li>
                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="color"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Color
                                                <input
                                                    type="text"
                                                    name="color"
                                                    id="color"
                                                    value={vechicle.color}
                                                    // value={color}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.color?.message}</span> */}
                                    </li>
                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="year"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Año
                                                <select
                                                    name="year"
                                                    value={vechicle.year}
                                                    // value={year}
                                                    className="w-3/5 bg-white text-center text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                >
                                                    {
                                                        yearsSelect.map(anio => {
                                                            return (
                                                                <option key={anio} value={anio}>
                                                                    {anio}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.year?.message}</span> */}
                                    </li>
                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="plaque"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Matricula
                                                <input
                                                    type="text"
                                                    name="matricula"
                                                    id="plaque"
                                                    value={vechicle.matricula}
                                                    // value={plaque}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.plaque?.message}</span> */}
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="operative"
                                            className="flex justify-between"
                                        >
                                            Operativo
                                            <div className="w-full flex justify-center pl-2">
                                                <input
                                                    type="checkbox"
                                                    name="isDisponible"
                                                    id="operative"
                                                    checked={vechicle.isDisponible}
                                                    // checked={operative}
                                                    className="w-6 bg-white text-[#010101] outline-none"
                                                    onChange={handleChecked}
                                                />
                                                <span className="pl-2">
                                                    ¿Está operativo?
                                                </span>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <div className="flex w-full justify-between">
                                            <label
                                                htmlFor="observation"
                                                className="flex w-full justify-between pr-4"
                                            >
                                                Observación
                                                <input
                                                    type="text"
                                                    name="observacion"
                                                    id="observation"
                                                    value={vechicle.observacion}
                                                    // value={observation}
                                                    className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <strong>
                                                <abbr title="required">*</abbr>
                                            </strong>
                                        </div>
                                        {/* <span className="text-sm">{errors.observation?.message}</span> */}
                                    </li>

                                    {/* <li>
                                    <div className="flex w-full justify-between">
                                        <label
                                            htmlFor="photo"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Foto
                                            <div className="border border-secondary h-10 w-fit px-4 rounded-md">
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    id="photo"
                                                    className="hidden"
                                                    onChange={e => {
                                                        if (e.target.value) {
                                                            setNameFile(e.target.value)
                                                        }
                                                        const file = e.target.files[0]
                                                        let reader = new FileReader()

                                                        reader.onload = function () {
                                                            // console.log(reader.result);
                                                            setValue("imagen", reader.result)
                                                        }

                                                        reader.readAsDataURL(file)

                                                    }}
                                                />
                                                <label htmlFor="photo" className='flex gap-x-4 h-full items-center cursor-pointer' >
                                                    <img src={IconFile} alt="" />
                                                    <span>{
                                                        nameFile || 'Seleccionar archivo'
                                                    }</span>
                                                </label>
                                            </div>

                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                </li> */}
                                </ul>

                            }
                        </fieldset>
                        <p className="text-center text-white mt-4">
                            <button className="bg-secondary px-8 py-2 rounded-lg">
                                {
                                    id ? "Actualizar" :
                                        "Agregar"
                                }
                            </button>
                        </p>
                    </section>
                </form>
            </div>
        </section >
    )
}
export default AddVehicleControlado