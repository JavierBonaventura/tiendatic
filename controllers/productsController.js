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

  electrodomesticosCocinas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosCocinas = products.filter(
        (Electro) => Electro.subcategoria === "Cocinas"
      );

    res.render("electrodomesticos", { product: soloElectrosCocinas });
  },

  electrodomesticosSecarropas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosSecarropas = products.filter(
        (Electro) => Electro.subcategoria === "Secarropas"
      );

    res.render("electrodomesticos", { product: soloElectrosSecarropas });
  },

  electrodomesticosLavarropas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosLavarropas = products.filter(
        (Electro) => Electro.subcategoria === "Lavarroas"
      );

    res.render("electrodomesticos", { product: soloElectrosLavarropas });
  },

  electrodomesticosEstufas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosEstufas = products.filter(
        (Electro) => Electro.subcategoria === "Estufas"
      );

    res.render("electrodomesticos", { product: soloElectrosEstufas });
  },

  electrodomesticosTermotanques: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosTermotanques = products.filter(
        (Electro) => Electro.subcategoria === "Termotanques"
      );

    res.render("electrodomesticos", { product: soloElectrosTermotanques });
  },
  
  electrodomesticosHornos: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosHornos = products.filter(
        (Electro) => Electro.subcategoria === "Hornos"
      );

    res.render("electrodomesticos", { product: soloElectrosHornos });
  },
    
  electrodomesticosMicroondas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosHMicroondas = products.filter(
        (Electro) => Electro.subcategoria === "Microondas"
      );

    res.render("electrodomesticos", { product: soloElectrosHMicroondas });
  },

  electronica: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    res.render("electronica", { product: soloElectronica });
  },


  electronicaTablets: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroTablets = products.filter(
        (Electro) => Electro.subcategoria === "Tablets"
      );

    res.render("electronica", { product: soloElectroTablets });
  },


  electronicaNotebooks: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroNotebooks = products.filter(
        (Electro) => Electro.subcategoria === "Notebooks"
      );

    res.render("electronica", { product: soloElectroNotebooks });
  },

  electronicaAutosRc: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroAutosRc = products.filter(
        (Electro) => Electro.subcategoria === "AutosRc"
      );

    res.render("electronica", { product: soloElectroAutosRc });
  },

  electronicaHelicopterosRc: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroHelicopterosRc = products.filter(
        (Electro) => Electro.subcategoria === "HelicopertosRc"
      );

    res.render("electronica", { product: soloElectroHelicopterosRc });
  },

  electronicaSmartTv: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroSmartTv = products.filter(
        (Electro) => Electro.subcategoria === "SmartTv"
      );

    res.render("electronica", { product: soloElectroSmartTv });
  },


  muebles: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    res.render("muebles", { product: soloMuebles });
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
