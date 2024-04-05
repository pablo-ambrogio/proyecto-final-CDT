export const pattern = {
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    text: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
}

export const message = {
    req: "Este campo es obligatorio",
    email: "Verifique el correo",
    password: "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.",
    minLength:"* el nombre debe tener al menos 3 caracteres",
    text: "verifique que sea solo texto"
}