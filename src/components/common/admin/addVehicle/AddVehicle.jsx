import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { message } from '../../../utils/validateForm'
import { years } from '../../../utils/utils'
import { NavBarContext } from "../../../../context/NavbarContext";
import IconFile from '../../../../assets/icon-file.svg'

export const defaultValues = {
    brand: "",
    model: "",
    category: "",
    serialMotor: "",
    color: "",
    year: "",
    plaque: "",
    operative: false,
    observation: "",
    isFav: false
}


const AddVehicle = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { setDataForId, dataForId, searchDataForId } = useContext(NavBarContext)
    const [dataValue, setDataValue] = useState({})


    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm(dataValue);

    const [categories, setCategories] = useState([])
    const [yearsSelect, setYearsSelect] = useState([])
    const [nameFile, setNameFile] = useState("")

    const {
        brand, model, category,
        serialMotor,
        color, year, plaque, operative,
        observation,
        photo,
    } = dataForId

    // const getCategory = async () => {
    //     const response = await fetch("http://localhost:8084/categoria/list")
    //     const data = await response.json()
    //     setCategories(data);
    // }


    const getCategory = async () => {
        const response = await fetch("http://localhost:3000/categories")
        const data = await response.json()
        setCategories(data);
    }

    const handleChange = e => {
        // console.log(e);
        const value = e.target.value
        const name = e.target.name
        // console.log(value, name);
        setValue(name, value)
        setDataForId({
            // ...dataForId,
            [name]: value
        })
    }

    const handleChangeChecked = e => {
        const checked = e.target.checked
        const name = e.target.name
        setValue(name, checked)
        setDataForId({
            // ...dataForId,
            [name]: checked
        })
    }

    // const addVehicle = async settings => {
    //     const response = await fetch("http://localhost:8084/vehiculo/add", settings)
    //     const data = await response.json()
    //     console.log(data);
    // }

    const addVehicleAxios = vehicle => {
        axios.post("http://localhost:3000/vehicles", vehicle)
        console.log(vehicle);
    }

    useEffect(() => {
        const getYears = years()
        getCategory()
        setYearsSelect(getYears);
    }, [])

    useEffect(() => {
        console.log(id);
        if (id) {
            searchDataForId(id)
            console.log(dataForId);
            setDataValue(dataForId)
        } else {
            setDataForId({})
            setDataValue(defaultValues)
            // reset(defaultValues)
        }
    }, [id])


    const onError = data => {
        console.log(data);
    }

    const onSubmit = data => {

        // console.log(refactorizadoDataServer);
        console.log(data);
        if (id) {
            axios.put("http://localhost:3000/vehicles/" + id, data)
        } else {
            // const categoryFilter = categories.find(category => category.titulo === data.category)
            // console.log(categoryFilter);
            // const refactorizadoData = {
            //     marca: data.brand,
            //     modelo: data.model,
            //     serialMotor: data.serialMotor,
            //     color: data.color,
            //     year: data.year,
            //     matricula: data.plaque,
            //     isDisponible: data.operative,
            //     isFav: false,
            //     observacion: data.observation,
            //     categoria: {
            //         id: categoryFilter.id,
            //         titulo: categoryFilter.titulo,
            //         descripcion: categoryFilter.descripcion,
            //         imagen: categoryFilter.imagen
            //     }
            // }

            const refactorizadoDataServer = {
                brand: data.brand,
                model: data.model,
                serialMotor: data.serialMotor,
                color: data.color,
                year: data.year,
                plaque: data.plaque,
                isDisponible: data.operative,
                observacion: data.observation,
                categoria: data.category,
                isFav: false
            }

            // console.log(refactorizadoData);
            for (const key in refactorizadoDataServer) {
                if (typeof refactorizadoDataServer[key] === 'string') {
                    refactorizadoDataServer[key] = refactorizadoDataServer[key].toLowerCase();
                }
            }
            console.log(refactorizadoDataServer);
            addVehicleAxios(refactorizadoDataServer)

            // const settings = {
            //     method: 'POST',
            //     body: JSON.stringify(refactorizadoData),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }

            // addVehicle(settings);
        }
        // reset()
        navigate("/admin/vehicles-list")
    };

    return (
        <section className="w-full text-[#010101] max-w-7xl mx-auto text-lg flex justify-center items-center">
            <div className="w-4/5 p-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
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
                                                name="brand"
                                                value={brand}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("brand", {
                                                    required: message.req
                                                    ,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}

                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                    <span className="text-sm">{errors.brand?.message}</span>
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
                                                name="model"
                                                id="model"
                                                value={model}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("model", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)

                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                    <span className="text-sm">{errors.model?.message}</span>
                                </li>
                                <li>
                                    <div className="flex w-full justify-between">
                                        <label
                                            htmlFor="category"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Categoria
                                            <select
                                                name="category"
                                                id="category"
                                                value={category}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("category", {
                                                    required: message.req,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
                                            >
                                                <option>
                                                    Selec. una categoria
                                                </option>
                                                {
                                                    categories.map(category => {
                                                        return (
                                                            // <option
                                                            //     key={category.id}
                                                            //     value={category.titulo}>
                                                            //     {category.titulo}
                                                            // </option>

                                                            <option
                                                                key={category.id}
                                                                value={category.name}>
                                                                {category.name}
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
                                    <span className="text-sm">{errors.category?.message}</span>
                                </li>

                                <li>
                                    <div className="flex w-full justify-between">
                                        <label
                                            htmlFor="serial-motor"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Serial motor
                                            <input
                                                type="text"
                                                name="serial-motor"
                                                id="serial-motor"
                                                value={serialMotor}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("serialMotor", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    // value: serialMotor,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                    <span className="text-sm">{errors.serialMotor?.message}</span>
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
                                                value={color}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("color", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    // value: color,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                    <span className="text-sm">{errors.color?.message}</span>
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
                                                value={year}
                                                className="w-3/5 bg-white text-center text-[#010101] pl-1 outline-none"
                                                {...register("year", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    // value: year,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
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
                                    <span className="text-sm">{errors.year?.message}</span>
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
                                                name="plaque"
                                                id="plaque"
                                                value={plaque}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("plaque", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    // value: plaque,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                    <span className="text-sm">{errors.plaque?.message}</span>
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
                                                name="operative"
                                                id="operative"
                                                checked={operative}
                                                className="w-6 bg-white text-[#010101] outline-none"
                                                {...register("operative", {
                                                    // value: operative,
                                                    onChange: e => {
                                                        handleChangeChecked(e)
                                                    }
                                                })}
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
                                                name="observation"
                                                id="observation"
                                                value={observation}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("observation", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    // value: observation,
                                                    onChange: e => {
                                                        handleChange(e);
                                                    }
                                                })}
                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                    <span className="text-sm">{errors.observation?.message}</span>
                                </li>

                                <li>
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
                                </li>
                            </ul>
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
    );
};
export default AddVehicle;