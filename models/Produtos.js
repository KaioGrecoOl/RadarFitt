// const mongoose = require('mongoose')

// const Produtos = mongoose.model('Produtos', {
//   produto: String,
//   valor: Number,
//   descricao: String,
// },
// { timestamps: true })

// module.exports = Produtos

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    produto: String,
    valor: Number,
    descricao: String,
  },
  { timestamps: true }
);

const Produtos = mongoose.model("Produtos", productSchema);
module.exports = Produtos;