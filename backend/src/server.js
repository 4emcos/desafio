const express = require ('express');
const cors = require ('cors')
const app = express ();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

// requisita os controllers e services
require('./controllers/authController')(app);
require('./controllers/projectController')(app);
require('./services/equipServices')(app);
require('./services/reqServices')(app);
require('./services/getServices')(app);


app.listen(5000);