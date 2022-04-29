const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.electrodomesticos);
router.get('/electrodomesticos', controller.electrodomesticos);
router.get('/electrodomesticos/audio', controller.electrodomesticosAudio);
router.get('/electronica', controller.electronica);
router.get('/muebles', controller.muebles);
router.get('/detail', controller.detail);
router.get("/product/:id", controller.getOne);

module.exports = router;