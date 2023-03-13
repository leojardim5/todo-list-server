const mongoose = require('mongoose')


const url = 'mongodb+srv://leojardim13:210872@clus.nlffmt6.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('MongoDB database connection established successfully'); 
});

connection.once("open",()=>{
    console.log("conexao com o banco de dados estabelecida")
})

module.exports = connection