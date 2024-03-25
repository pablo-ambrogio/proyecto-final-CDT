import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { message } from '../../../utils/validateForm'
import NotFound from '../../../../assets/iconCategories/icon-notfound.svg'
import { convertToLowerCase } from '../../../utils/utils'



const FormCategories = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

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
                        className='grid grid-rows-3 place-items-center bg-primary rounded-lg text-white'>

                        <div className='row-span-1 w-4/12 self-end'>
                            <label htmlFor="category" className='grid'>
                                Título
                                <input type="text" name="category" id="category"
                                    className="outline-none bg-white border border-1 pl-2 h-8 text-[#010101]"
                                    {...register("name", {
                                        required: message.req
                                    })}
                                />
                            </label>
                            <span className="text-sm">{errors.name?.message}</span>

                        </div>
                        <div className='row-span-1 w-4/12'>
                            <label htmlFor="description" className='grid'>
                                Descripción
                                <textarea name="description" id="description" cols="30" rows="5"
                                    className="outline-none bg-white border border-1 pl-2 resize-none text-[#010101]"
                                    {...register("description", {
                                        required: message.req
                                    })}
                                >
                                </textarea>
                            </label>
                            <span className="text-sm">{errors.name?.message}</span>
                        </div>
                        {/* <div className='row-span-1 w-4/12'>
                            <label htmlFor="description" className='grid'>
                                Icono
                                <input type="file" />
                            </label>
                            <span className="text-sm">{errors.name?.message}</span>
                        </div> */}

                        <div className='row-span-1'>
                            <button className='bg-secondary px-8 py-2 rounded-lg'>
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