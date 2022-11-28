import { Usuario } from "../models/usuarios.js"; 

// Obtener todos los productos
export const getUsuarios = async (req, res) => {
    try{
        const data = await Usuario.find({});
        res.send({data});
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
};

//Obtener un Usuario por id
export const getUsuario = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Usuario.findById(id);
        if (!data) {
            throw new Error("Usuario no encontrado");
        }
        res.send({data});
    }
    catch(err){
        console.log(err);
    }
};

// Crear un Usuario
export const createUsuario = async (req, res) => {
    try{
        const {body} = req;
        const data = await Usuario.create(body);
        res.send({data});
    }
    catch(err){
        console.log(err);
    }
};

//Actualizar un Usuario
export const updateUsuario = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const usuarioDB = await Usuario.findById(id);
        if (!usuarioDB) {
            throw new Error("Usuario no encontrado");
        }
        const data = await Usuario.findOneAndUpdate({ id }, body, { new: true });
        res.send({data});
    }
    catch(err){
        console.log(err);
    }
};

//Eliminar un Usuario
export const deleteUsuario = async (req, res) => {
    try{
        const id = req.params.id;
        const usuarioDB = await Usuario.findById(id);
        if (!usuarioDB) {
            throw new Error("Usuario no encontrado");
        }
        const data = await Usuario.findByIdAndDelete( id );
        res.send({data});
    }
    catch(err){
        console.log(err);
    }
};