const Vehiculo = require('../models/vehiculo');

class VehiculoController {
    static getAll(req, res) {
        Vehiculo.getAll((err, resultados) => {
            if (err) return res.status(500).send(err);
            res.json(resultados);
        });
    }

    static create(req, res) {
        if (!req.body.placa) {
            return res.status(400).send("La placa es obligatoria.");
        }
        Vehiculo.create(req.body, (err, resultado) => {
            if (err) return res.status(500).send(err);
            res.status(201).send(resultado);
        });
    }

    static update(req, res) {
        if (!req.body.placa) {
            return res.status(400).send("La placa es obligatoria.");
        }
        Vehiculo.update(req.params.placa, req.body, (err, resultado) => {
            if (err) return res.status(500).send(err);
            res.send(resultado);
        });
    }

    static delete(req, res) {
        Vehiculo.delete(req.params.placa, (err, resultado) => {
            if (err) return res.status(500).send(err);
            res.send(resultado);
        });
    }
}

module.exports = VehiculoController;