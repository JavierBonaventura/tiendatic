const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, "./data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));



const groups = "hola"

module.exports = {
    index: (req, res) => {
       
        res.render('products/index', { product: products });
    },

    electrodomesticos: (req, res) => {
        res.render("electrodomesticos", { product: products });
    },
    electronica: (req, res) => {
        res.render("electronica");
    },
    muebles: (req, res) => {
        res.render("muebles");
    },

    detail: (req, res) => {

        // Busco el grupo
        const group = groups.find(group => group.id == req.params.id);

        res.render('products/detail', { group });
    }
}