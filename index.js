const app = require('./app');
const config = require('./config');
require('./database');

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.listen(config.PORT);