import { useForm } from "react-hook-form";
import axios from "axios";
import { message } from '../../../utils/validateForm'

const AddVehicle = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {

        for (const key in data) {
            if (typeof data[key] === 'string') {
                data[key] = data[key].toLowerCase();
            }
        }
        
        axios.post("http://localhost:3000/vehicles", data);
    });

    return (
        <section className="w-full text-[#010101] text-lg flex justify-center items-center">
            <div className="w-4/5 p-4 rounded-lg">
                <form onSubmit={onSubmit}>
                    <h1>Carga de vehiculo</h1>
                    <p>
                        Los campos obligatorios van seguidos de
                        <strong>
                            <abbr title="required"> *</abbr>.
                        </strong>
                    </p>
                    <section className="bg-red text-white p-4 flex flex-col gap-y-4 rounded-lg">
                        <h2 className="text-xl">Información del vehiculo</h2>
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
                                                id="brand"
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("brand", {
                                                    required: {
                                                        value: true,
                                                        message: message.req
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("model", {
                                                    required: message.req
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("category", {
                                                    required: message.req
                                                })}
                                            >
                                                <option value="">
                                                    Selec. una categoria
                                                </option>
                                                <option value="car">Auto</option>
                                                <option value="van">
                                                    Camioneta
                                                </option>
                                                <option value="motorcycle">
                                                    Moto
                                                </option>
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("serialBody", {
                                                    required: message.req
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("serialMotor", {
                                                    required: message.req
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("color", {
                                                    required: message.req
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
                                            <input
                                                type="text"
                                                name="year"
                                                id="year"
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("year", {
                                                    required: message.req
                                                })}
                                            />
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
                                            Placa
                                            <input
                                                type="text"
                                                name="plaque"
                                                id="plaque"
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("plaque", {
                                                    required: message.req
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
                                                className="w-6 bg-white text-[#010101] outline-none"
                                                {...register("operative")}
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("observation", {
                                                    required: message.req
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
                                                className="w-3/5 bg-white text-[#010101] pl-1 outline-none"
                                                {...register("description", {
                                                    required: message.req
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
                                                    // onChange: (e) => {
                                                    //     const file =
                                                    //         e.target.files[0];
                                                    //     const reader = new FileReader();

                                                    //     // if (file) {
                                                    //     console.log(file);

                                                    //     reader.addEventListener("load", (e) => {
                                                    //         console.log(e.target.result);
                                                    //     }
                                                    //     );
                                                    //     reader.readAsDataURL(file);
                                                    //     // }
                                                    // }
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
                                Agregar
                            </button>
                        </p>
                    </section>
                </form>
            </div>
        </section>
    );
};
export default AddVehicle;
