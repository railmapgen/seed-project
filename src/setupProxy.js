module.exports = app => {
    app.get('/seed-project/info.json', (req, res) => {
        res.send({
            component: 'seed-project',
            version: '9.9.9',
            environment: 'DEV',
            instance: 'localhost',
        });
    });
};
