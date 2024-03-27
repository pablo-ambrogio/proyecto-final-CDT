import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { message } from '../../../utils/validateForm'
import NotFound from '../../../../assets/iconCategories/icon-notfound.svg'
import { convertToLowerCase } from '../../../utils/utils'
import IconFile from '../../../../assets/icon-file.svg'
import { useState } from 'react'



const FormCategories = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [nameFile, setNameFile] = useState("")

    const onSubmit = handleSubmit((data) => {
        const dataRefac = {
            name: data.name,
            description: data.description,
            icon: NotFound
        }
        const dataConvert = convertToLowerCase(dataRefac);

        axios.post("http://localhost:3000/categories", dataConvert)
        reset()
        navigate("/admin/categories-list")
    })

    return (
        <div
            className='w-3/5 h-1/2 flex items-center justify-center'
        >
            <div
                className='w-full'
            >
                <form
                    onSubmit={onSubmit}
                >
                    <section
                        className='grid grid-rows[1fr,1fr,1fr,100px] gap-y-8 place-items-center bg-grey rounded-lg text-secondary py-8'>

                        <div className='row-span-1 w-5/12 self-end'>
                            <label htmlFor="category" className='grid'>
                                Título
                                <input type="text" name="category" id="category"
                                    className="outline-none bg-white border pl-2 h-10 text-[#010101] rounded-md"
                                    {...register("name", {
                                        required: message.req
                                    })}
                                />
                            </label>
                            <span className="text-sm">{errors.name?.message}</span>

                        </div>
                        <div className='row-span-1 w-5/12'>
                            <label htmlFor="description" className='grid'>
                                Descripción
                                <textarea name="description" id="description" cols="30" rows="5"
                                    className="outline-none bg-white border border-1 pl-2 resize-none text-[#010101] rounded-md"
                                    {...register("description", {
                                        required: message.req
                                    })}
                                >
                                </textarea>
                            </label>
                            <span className="text-sm">{errors.name?.message}</span>
                        </div>
                        <div className='row-span-1 w-5/12 self-start'>
                            <span>Icono</span>
                            <div className='bg-secondary text-white h-10 w-fit px-4 rounded-md'>
                                <input type="file" id='icon' className='hidden'
                                    onChange={e => {
                                        if (e.target.value) {
                                            setNameFile(e.target.value)
                                        }
                                    }} />
                                <label htmlFor="icon" className='flex gap-x-4 h-full items-center cursor-pointer' >
                                    <img src={IconFile} alt="" />
                                    <span>{
                                        nameFile || 'Seleccionar archivo'
                                    }</span>
                                </label>
                            </div>
                            <span className="text-sm">{errors.name?.message}</span>
                        </div>

                        <div className='row-span-1 self-start'>
                            <button className='bg-secondary text-white px-8 py-2 rounded-lg'>
                                Agregar
                            </button>
                        </div>
                    </section>
                </form>
            </div>

        </div>

    )
}
export default FormCategories