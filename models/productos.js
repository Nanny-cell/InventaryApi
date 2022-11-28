import { model, Schema } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"],
    },
    stock: {
        type: Number,
        required: [true, "El stock es obligatorio"],
    },
    disable: {
        type: Boolean,
        required: false,
        default: false,
    }
});

export const Producto = model("Producto", productoSchema);