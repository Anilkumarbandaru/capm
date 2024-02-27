

module.exports = (srv) => {
    srv.on('panther', req => `Hello ${req.data.name}`);
}