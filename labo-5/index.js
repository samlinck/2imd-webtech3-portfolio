const express = require('express');
const app = express();
const port = 3000;
const messageRouter = require("./routers/message");

app.get('/', (req, res) => res.render('index', { title: 'Labo 5', message: 'Made it! or nah? maybe? Hopefully' }));
app.use('/api/v1/', messageRouter);

//use pug
app.set('views', './views');
app.set('view engine', 'pug');


app.listen(port, () => console.log(`Example app listening on port ${port}!`));