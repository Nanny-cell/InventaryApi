/* 
    localhost:3000/productos
*/

import {createProducto, getProductos, getProducto, updateProducto, deleteProducto} from "../controller/productos.js";
import express from "express";
const router = express.Router();

router.get('/', getProductos);
router.get('/:id', getProducto);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);



export default router;