const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '/../data/groups.json');
const groups = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.render('products/index', { groups });
    },

    electrodomesticos: (req, res) => {
        res.render("electrodomesticos");
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