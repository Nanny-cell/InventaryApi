import { Producto } from "../models/productos.js"; 

// Obtener todos los productos
export const getProductos = async (req, res) => {
    try{
        const data = await Producto.find({});
        res.send({data});
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
};

//Obtener un productos por id
export const getProducto = async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Producto.findById(id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        res.send({product});
    }
    catch(err){
        console.log(err);
    }
};

// Crear un producto
export const createProducto = async (req, res) => {
    try{
        const {body} = req;
        const data = await Producto.create(body);
        res.send({data});
    }
    catch(err){
        console.log(err);
    }
};

//Actualizar un producto
export const updateProducto = async (req, res) => {
    try{
        const id = req.params.id;
        const producto = req.body;
        const productDB = await Producto.findById(id);
        if (!productDB) {
            throw new Error("Producto no encontrado");
        }
        const updatedProducto = await Producto.findOneAndUpdate({ id }, producto, { new: true });
        res.send({updatedProducto});
    }
    catch(err){
        console.log(err);
    }
};

//Eliminar un producto
export const deleteProducto = async (req, res) => {
    try{
        const id = req.params.id;
        const productDB = await Producto.findById(id);
        if (!productDB) {
            throw new Error("Producto no encontrado");
        }
        const deletedProducto = await Producto.findByIdAndDelete( id );
        res.send({deletedProducto});
    }
    catch(err){
        console.log(err);
    }
};