const express = require('express')
const app = express()
const port = 3000

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rutas
const mainRoutes = require('./routes/index');
const productsRoutes = require('./routes/products');

app.use('/', mainRoutes);
app.use('/productos', productsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});