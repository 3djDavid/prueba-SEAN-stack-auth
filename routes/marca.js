const { Router } = require('express');
const router = Router();

//CONTROLLER
const marcaCtrl = require('../controllers/marca.controller')

//ROUTER

router.get('/', marcaCtrl.getMarca)



module.exports = router;