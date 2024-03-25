import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { message } from '../../../utils/validateForm'
import { years } from '../../../utils/utils'
import { NavBarContext } from "../../../../context/NavbarContext";


export const defaultValues = {
    brand: "",
    model: "",
    category: "",
    serialBody: "",
    serialMotor: "",
    color: "",
    year: "",
    plaque: "",
    operative: false,
    observation: "",
    description: ""
}


const AddVehicle = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { setDataForId, dataForId, searchDataForId } = useContext(NavBarContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm(defaultValues);

    const [categories, setCategories] = useState([])
    const [yearsSelect, setYearsSelect] = useState([])

    const {
        brand, model, category,
        serialBody, serialMotor,
        color, year, plaque, operative,
        observation, description,
        photo,
    } = dataForId

    const getCategory = async () => {
        const { data } = await axios.get("http://localhost:3000/categories")
        setCategories(data);
    }

    const handleChange = e => {
        console.log(e);
        const value = e.target.value
        const name = e.target.name
        setDataForId({
            ...dataForId,
            [name]: value
        })
    }

    const handleChangeChecked = e => {
        const checked = e.target.checked
        const name = e.target.name
        setDataForId({
            ...dataForId,
            [name]: checked
        })
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
        } else {
            setDataForId({})
            reset(defaultValues)
        }
    }, [id])

    const onSubmit = handleSubmit((data) => {
        if (id) {
            axios.put("http://localhost:3000/vehicles/" + id, data)
        } else {
            const refactorizadoData = {
                brand: data.brand,
                category: data.category,
                description: data.description,
                model: data.model,
                observation: data.observation,
                operative: data.operative,
                plaque: data.plaque,
                serialBody: data.serialBody,
                serialMotor: data.serialMotor,
                year: data.year,
                isFav: false
            }
            console.log(refactorizadoData);
            for (const key in refactorizadoData) {
                if (typeof refactorizadoData[key] === 'string') {
                    refactorizadoData[key] = refactorizadoData[key].toLowerCase();
                }
            }
            axios.post("http://localhost:3000/vehicles", refactorizadoData);
        }
        // reset()
        navigate("/admin/vehicles-list")
    });

    return (
        <section className="w-full text-[#010101] text-lg flex justify-center items-center">
            <div className="w-4/5 p-4 rounded-lg">
                <form onSubmit={onSubmit}>
                    <h1
                        className="text-2xl text-center mb-4"
                    >
                        {
                            id ? "Actualización de vehículo" :
                                "Carga de vehiculo"
                        }
                    </h1>
                    <section className="bg-red text-white p-4 flex flex-col gap-y-2 rounded-lg">
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
                                                    // value: brand,
                                                    required: {
                                                        value: true,
                                                        message: message.req
                                                    },

                                                    // setValueAs: v => {
                                                    //     parseInt(v)
                                                    //     console.log(v)
                                                    // }

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
                                                    value: model

                                                    // setValueAs: v =>
                                                    //     parseInt(v)
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
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    value: category,
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
                                            htmlFor="serial-body"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Serial carrocería
                                            <input
                                                type="text"
                                                name="serial-body"
                                                id="serial-body"
                                                value={serialBody}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("serialBody", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    value: serialBody,
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
                                    <span className="text-sm">{errors.serialBody?.message}</span>
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
                                                    value: serialMotor,
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
                                                    value: color,
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
                                                    value: year,
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
                                    </div>
                                    <span className="text-sm">{errors.year?.message}</span>
                                </li>
                                <li>
                                    <div className="flex w-full justify-between">
                                        <label
                                            htmlFor="plaque"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Placa
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
                                                    value: plaque,
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
                                                    value: operative,
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
                                                    value: observation,
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
                                            htmlFor="description"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Descripcion
                                            <input
                                                type="text"
                                                name="description"
                                                id="description"
                                                value={description}
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("description", {
                                                    required: message.req,
                                                    // setValueAs: v =>
                                                    //     parseInt(v)
                                                    // ,
                                                    value: description,
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
                                    <span className="text-sm">{errors.description?.message}</span>
                                </li>
                                <li>
                                    <div className="flex w-full justify-between">
                                        <label
                                            htmlFor="photo"
                                            className="flex w-full justify-between pr-4"
                                        >
                                            Foto
                                            <input
                                                type="file"
                                                name="photo"
                                                id="photo"
                                                className="w-3/5 bg-white text-[#010101] outline-none"
                                                {...register("photo", {
                                                    value: photo
                                                })}
                                            />
                                        </label>
                                        <strong>
                                            <abbr title="required">*</abbr>
                                        </strong>
                                    </div>
                                </li>
                            </ul>
                        </fieldset>
                        <p className="text-center">
                            <button className="bg-blue px-8 py-2 rounded-lg">
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