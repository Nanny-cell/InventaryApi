import { model, Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "El password es obligatorio"],
    },
    rol: {
        type: String,
        required: true,
        default: "user_rol",
        enum: ['user_rol', 'admin_rol']
    }
});

export const Usuario = model("Usuario", usuarioSchema);