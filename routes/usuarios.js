import { createUsuario, getUsuarios, getUsuario, updateUsuario, deleteUsuario} from "../controller/usuarios.js";
import express from "express";

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;