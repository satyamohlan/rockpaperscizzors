const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.listen(port, () => console.log(`listening on port ${port}`));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use('/css', express.static('views/css'));
app.get('/', (req, res) => res.render('index'));