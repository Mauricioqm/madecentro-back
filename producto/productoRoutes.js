const Productos = require('./productoController');

module.exports = (router) => {
  router.post('/', Productos.crearProducto);
  router.get('/', Productos.productos);
  router.get('/:id', Productos.producto);
  router.put('/:id', Productos.actualizarProducto);
  router.delete('/:id', Productos.eliminarProducto);
}