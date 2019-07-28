const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');



app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());



// mongoose.connect('mongodb://admin:123456d@ds139949.mlab.com:39949/chocktawee_db');


app.use('/', require('./routes/loginRoute'))

app.listen(3200, () => { console.log("running at port : " + 3200) });