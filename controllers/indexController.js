const path = require('path');
const fs = require("fs");
const productsFilePath = path.join(__dirname, "./data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

module.exports = {
    index: (req, res) => {
        console.log(products)
        res.render("index", )
    }
}