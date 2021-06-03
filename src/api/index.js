
module.exports = (app) => {

    app.use('/api/public', require('./public'));

    // ERROR 404
    app.get('*', function (_req, res) { res.status(404).json({ mensaje: '[GET 404] No se encontró el recurso solicitado' }); });
    app.post('*', function (_req, res) { res.status(404).json({ mensaje: '[POST 404] No se encontró el recurso solicitado' }); });
    app.put('*', function (_req, res) { res.status(404).json({ mensaje: '[PUT 404] No se encontró el recurso solicitado' }); });
    app.delete('*', function (_req, res) { res.status(404).json({ mensaje: '[DELETE 404] No se encontró el recurso solicitado' }); });
};