const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
  idReferencia: {
    type: Number,
    required: true,
  },
  referencia: {
    type: String,
    required: true,
    trim: true
  },
  desccripcion: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
  },
  proveedor: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('producto', productoSchema);