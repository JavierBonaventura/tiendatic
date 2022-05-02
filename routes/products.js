const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.productos);
router.get('/electrodomesticos', controller.electrodomesticos);
router.get('/electrodomesticos/audio', controller.electrodomesticosAudio);
router.get('/electrodomesticos/cocinas', controller.electrodomesticosCocinas);
router.get('/electrodomesticos/secarropas', controller.electrodomesticosSecarropas);
router.get('/electrodomesticos/Lavarropas', controller.electrodomesticosLavarropas);
router.get('/electrodomesticos/Estufas', controller.electrodomesticosEstufas);
router.get('/electrodomesticos/Termotanques', controller.electrodomesticosTermotanques);
router.get('/electrodomesticos/Hornos', controller.electrodomesticosHornos);
router.get('/electrodomesticos/aires', controller.electrodomesticosAires);
router.get('/electrodomesticos/Microondas', controller.electrodomesticosMicroondas);
router.get('/electronica', controller.electronica);
router.get('/electronica/tablets', controller.electronicaTablets);
router.get('/electronica/notebooks', controller.electronicaNotebooks);
router.get('/electronica/autosrc', controller.electronicaAutosRc);
router.get('/electronica/helicopterosrc', controller.electronicaHelicopterosRc);
router.get('/electronica/smarttv', controller.electronicaSmartTv);
router.get('/muebles', controller.muebles);
router.get('/muebles/despensero', controller.mueblesDespensero);
router.get('/muebles/mesasillas', controller.mueblesMesaSillas);
router.get('/muebles/placards', controller.mueblesPlacards);
router.get('/muebles/mueblesdecocina', controller.mueblesDeCocina);
router.get('/muebles/racktv', controller.mueblesRackTv);
router.get('/muebles/camas', controller.mueblescamas);
router.get('/muebles/colchones', controller.mueblesColchones);





router.get('/detail', controller.detail);
router.get("/product/:id", controller.getOne);
router.get("/product/electrodomesticos/:id", controller.getOne);

module.exports = router;