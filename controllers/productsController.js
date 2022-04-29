const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "./data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const groups = "hola";

module.exports = {
  index: (req, res) => {
    res.render("products/index", { product: products });
  },

  electrodomesticos: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    res.render("electrodomesticos", { product: soloElectros });
  },

  electrodomesticosAudio: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosAudio = products.filter(
        (Electro) => Electro.subcategoria === "Audio"
      );

    res.render("electrodomesticos", { product: soloElectrosAudio });
  },

  electronica: (req, res) => {
    res.render("electronica");
  },
  muebles: (req, res) => {
    res.render("muebles");
  },

  detail: (req, res) => {
    res.render("productDetail");
  },

  getOne: (req, res) => {
    const paramId = parseInt(req.params.id);
    const product = products.find(
      (productElement) => productElement.id === paramId
    );

    if (product != null) {
      res.render("productDetail", { product });
    } else {
      res.status(404).json({ msg: "No esta el producto" });
    }
  },
  
};
