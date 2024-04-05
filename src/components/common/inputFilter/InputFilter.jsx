const InputFilter = ({ category, handleCheck, isCheck }) => {

    return (
        <label htmlFor={category.titulo}
            className={`${isCheck ? 'bg-primary' : 'text-secondary'}  `}
        >
            <input type="checkbox"
                className="hidden"
                id={category.titulo}
                name={category.titulo}
                value={category.titulo}
                onChange={handleCheck}
                title={category.titulo}
            />
            {category.titulo}
        </label>
    )
}
export default InputFilter