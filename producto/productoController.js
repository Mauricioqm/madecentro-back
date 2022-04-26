var dbConn = require('../config/db.config');
const express = require('express');

exports.crearProducto = (req, res) => {
  const nuevoProducto = {
    idReferencia: req.body.idReferencia,
    referencia: req.body.referencia,
    descripcion: req.body.descripcion,
    color: req.body.color,
    proveedor: req.body.proveedor,
    precio: req.body.precio,
    estado: req.body.estado
  }

  dbConn.query("INSERT INTO productos set ?", nuevoProducto, function (err, response) {
    if(err) {
      console.log("error: ", err);
    }
    else{
      res.json('producto creado exitosamente' + response);
    }
    });

}

exports.productos = function(req, res) {
  dbConn.query("Select * from productos", function (err, response) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
        console.log('productos : ', res);  
        res.json(response)
    }
}); 
};

exports.producto = function(req, res) {
  const id = req.params.id;
  console.log(id);
  dbConn.query("Select * from productos where idReferencia = ? ", id, function (err, response) {             
    if(err) {
        console.log("error: ", err);
    }
    else{
        res.json(response)
    }
});  
};

exports.actualizarProducto = function(res, req, id, producto) {
  console.log(id);
  dbConn.query("UPDATE productos SET idReferencia=?,referencia=?,descripcion=?,color=?,proveedor=?,precio=?,estado=? WHERE id = ?", [producto.idReferencia,producto.referencia,producto.descripcion,producto.color,producto.proveedor,producto.precio,producto.estado, id], function (err, response) {
    if(err) {
        console.log("error: ", err);
    }else{   
      res(response);
    }
}); 
};

exports.eliminarProducto = function(req, res) {
  var id = req.params.id;

  dbConn.query("DELETE FROM productos WHERE idReferencia = ?", [id], function (err, response) {
    if(err) {
        console.log("error: ", err);
    }
    else{
      console.log('eliminado');
      res.json(response)
    }
}); 
};