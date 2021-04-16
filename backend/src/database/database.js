const mongoose = require('mongoose');

// inicia o banco de dados, basicamente
let db = mongoose.connection;
const dbRoute = 'mongodb+srv://emerson:%21%40NqC%25t@cluster0.x08ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

db.once('open', () => console.log('connected to the database'));


module.exports = mongoose;