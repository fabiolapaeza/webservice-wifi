const express = require('express');
const app = express();
const mysql = require('../../models/mysql');

app.get('/getItems', async (req, res) => {
    try {

        const data = await mysql.execute(`SELECT * FROM conexiones ORDER BY fecha_registro DESC`);
        res.json({ mensaje: 'Acción realizada correctamente', data });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

app.post('/addItem', async (req, res) => {
    try {

        const body = req.body;
        await mysql.execute(`INSERT INTO conexiones (nombre_red, rssi, fecha_registro) 
                            VALUES ('${body.nombre_red}', ${body.rssi}, NOW())`);
        
        res.json({ mensaje: 'Acción realizada correctamente' });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

module.exports = app;