const db = require('../config/db');

class Vehiculo {
    static getAll(callback) {
        db.query('SELECT * FROM vehiculos', callback);
    }

    static create(vehiculo, callback) {
        db.query('INSERT INTO vehiculos SET ?', vehiculo, callback);
    }

    static update(placa, vehiculo, callback) {
        db.query('UPDATE vehiculos SET ? WHERE placa = ?', [vehiculo, placa], callback);
    }

    static delete(placa, callback) {
        db.query('DELETE FROM vehiculos WHERE placa = ?', placa, callback);
    }
}

module.exports = Vehiculo;