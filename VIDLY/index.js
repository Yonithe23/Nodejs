const Joi = require('joi')
const express = require('express');


const routes = require('./route/geners')
const app = express();

app.use(express.json());
app.use('/api/geners',routes);
const port = 3000;



app.get('/', (req, res) => res.send('Hello customer Welcome To VIDLY!'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));




