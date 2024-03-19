import { useForm } from 'react-hook-form'
import axios from 'axios'
import { message } from '../../../utils/validateForm'

const FormCategories = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        axios.post("http://localhost:3000/categories", data)
    })

    return (
        <div
            className='w-3/5 h-1/2 flex items-center justify-center bg-red'
        >
            <div
                className='w-full'
            >
                <form
                    onSubmit={onSubmit}
                >
                    <div
                        className='grid 
                grid-cols-1 
                grid-rows-2 
                place-items-center
                gap-y-2
                text-white
                '
                    >
                        <div className='row-span-1 w-full grid justify-center items-center gap-y2'>
                            <label htmlFor="category">
                                Nueva categoria
                            </label>
                            <input type="text" name="category" id="category"
                                className="w-60 bg-white text-[#010101] pl-2 outline-none p-2 rounded-lg"
                                {...register("name", {
                                    required: message.req
                                })}
                            />
                            <span className="text-sm">{errors.name?.message}</span>
                        </div>
                        <div className='row-span-2'>
                            <button className='bg-blue px-8 py-2 rounded-lg'>
                                Agregar
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    )
}
export default FormCategories