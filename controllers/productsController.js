const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "./data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const groups = "hola";

module.exports = {
  index: (req, res) => {
    res.render("products/index", { product: products });
  },

  productos: (req, res) => {
    res.render("productos");
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
    const soloElectrosAudio = soloElectros.filter(
        (Audio) => Audio.subcategoria === "Audio"
      );

    res.render("electrodomesticos", { product: soloElectrosAudio });
  },

  electrodomesticosCocinas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosCocinas = soloElectros.filter(
        (Cocinas) => Cocinas.subcategoria === "Cocinas"
      );

    res.render("electrodomesticos", { product: soloElectrosCocinas });
  },

  electrodomesticosSecarropas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosSecarropas = soloElectros.filter(
        (Secarropas) => Secarropas.subcategoria === "Secarropas"
      );

    res.render("electrodomesticos", { product: soloElectrosSecarropas });
  },

  electrodomesticosLavarropas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosLavarropas = soloElectros.filter(
        (Lavarroas) => Lavarroas.subcategoria === "Lavarroas"
      );

    res.render("electrodomesticos", { product: soloElectrosLavarropas });
  },

  electrodomesticosEstufas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosEstufas = soloElectros.filter(
        (Estufas) => Estufas.subcategoria === "Estufas"
      );

    res.render("electrodomesticos", { product: soloElectrosEstufas });
  },

  electrodomesticosTermotanques: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosTermotanques = soloElectros.filter(
        (Termotanques) => Termotanques.subcategoria === "Termotanques"
      );

    res.render("electrodomesticos", { product: soloElectrosTermotanques });
  },
  
  electrodomesticosHornos: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosHornos = soloElectros.filter(
        (Hornos) => Hornos.subcategoria === "Hornos"
      );

    res.render("electrodomesticos", { product: soloElectrosHornos });
  },
    
  electrodomesticosMicroondas: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosHMicroondas = soloElectros.filter(
        (Microondas) => Microondas.subcategoria === "Microondas"
      );

    res.render("electrodomesticos", { product: soloElectrosHMicroondas });
  },

  electrodomesticosAires: (req, res) => {
    const soloElectros = products.filter(
      (Electro) => Electro.categoria === "Electrodomesticos"
    );
    const soloElectrosAires = soloElectros.filter(
        (Aires) => Aires.subcategoria === "Aires"
      );

    res.render("electrodomesticos", { product: soloElectrosAires });
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
    const soloElectroTablets = soloElectronica.filter(
        (Tablets) => Tablets.subcategoria === "Tablets"
      );

    res.render("electronica", { product: soloElectroTablets });
  },


  electronicaNotebooks: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroNotebooks = soloElectronica.filter(
        (Notebooks) => Notebooks.subcategoria === "Notebooks"
      );

    res.render("electronica", { product: soloElectroNotebooks });
  },

  electronicaAutosRc: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroAutosRc = soloElectronica.filter(
        (AutosRc) => AutosRc.subcategoria === "AutosRc"
      );

    res.render("electronica", { product: soloElectroAutosRc });
  },

  electronicaHelicopterosRc: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroHelicopterosRc = soloElectronica.filter(
        (HelicopertosRc) => HelicopertosRc.subcategoria === "HelicopertosRc"
      );

    res.render("electronica", { product: soloElectroHelicopterosRc });
  },

  electronicaSmartTv: (req, res) => {
    const soloElectronica = products.filter(
      (Electro) => Electro.categoria === "Electronica"
    );
    const soloElectroSmartTv = soloElectronica.filter(
        (SmartTv) => SmartTv.subcategoria === "SmartTv"
      );

    res.render("electronica", { product: soloElectroSmartTv });
  },


  muebles: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    res.render("muebles", { product: soloMuebles });
  },





  mueblesDespensero: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesDespensero = soloMuebles.filter(
        (Despensero) => Despensero.subcategoria === "Despensero"
      );

    res.render("muebles", { product: soloMueblesDespensero });
  },

  mueblesMesaSillas: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesMesaSillas = soloMuebles.filter(
        (MesaSillas) => MesaSillas.subcategoria === "MesaSillas"
      );

    res.render("muebles", { product: soloMueblesMesaSillas });
  },

  mueblesPlacards: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesPlacards = soloMuebles.filter(
        (Placards) => Placards.subcategoria === "Placards"
      );

    res.render("muebles", { product: soloMueblesPlacards });
  },


  mueblesDeCocina: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesDeCocina = soloMuebles.filter(
        (DeCocina) => DeCocina.subcategoria === "DeCocina"
      );

    res.render("muebles", { product: soloMueblesDeCocina });
  },



  mueblesRackTv: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesRackTv = soloMuebles.filter(
        (RackTv) => RackTv.subcategoria === "RackTv"
      );

    res.render("muebles", { product: soloMueblesRackTv });
  },

  mueblescamas: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesCamas = soloMuebles.filter(
        (Camas) => Camas.subcategoria === "Camas"
      );
      soloMueblesCamas
    res.render("muebles", { product: soloMueblesCamas });
  },


  mueblesColchones: (req, res) => {
    const soloMuebles = products.filter(
      (Muebles) => Muebles.categoria === "Muebles"
    );
    const soloMueblesColchones = soloMuebles.filter(
        (Colchones) => Colchones.subcategoria === "Colchones"
      );

    res.render("muebles", { product: soloMueblesColchones });
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
