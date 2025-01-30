const express = require('express');
const router = express.Router();
const VehiculoController = require('../controllers/vehiculoController');

router.get('/', VehiculoController.getAll);
router.post('/', VehiculoController.create);
router.put('/:placa', VehiculoController.update);
router.delete('/:placa', VehiculoController.delete);

module.exports = router;