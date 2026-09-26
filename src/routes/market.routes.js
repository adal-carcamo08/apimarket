import Router from 'express';
import {
  getUsuarios,
  getProductos,
  postProductos,
  putProductos,
  deleteProductos,
  getProductosId,
  postRegistro,
  postLogin
} from '../controllers/market.controllers.js';

const router=Router()

// Ruta para consultar usuarios
router.get('/usuarios',getUsuarios);

router.post('/usuarios/registro', postRegistro);

//Ruta para consultar productos
router.get('/productos',getProductos);

//Ruta para consultar productos ID
router.get('/productos/:id',getProductosId);

// Ruta para iniciar sesión (Login)
router.post('/usuarios/login', postLogin);

//Ruta para ingresar producto
router.post('/productos',postProductos);
//Ruta para actualizar producto
router.put('/productos/:id', putProductos);
//Ruta para eliminar producto
router.delete('/productos/:id', deleteProductos);

export default router