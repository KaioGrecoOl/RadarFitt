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