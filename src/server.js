require('dotenv').config();
const { init } = require('./app.js');
const app = require('./app.js');
const initModels = require('./models/initModels.js');
const db = require('./utils/database')

const PORT = process.env.PORT || 2000;

initModels();

db.authenticate()
.then(()=> {console.log('Base De Datos Conectada')})
.catch((error)=> console.log(error));

//db.sync({force : false})
//.then(()=>{console.log('DB sincronizada')})
//.catch((error)=> {console.log(error)});

app.listen(PORT, ()=> {
    console.log("server on port " + PORT);
})