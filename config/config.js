const mongoose = require('mongoose')

const dbConnection = async () => {

   try{

    await mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
     
     
    })
  
    console.log('Base de Datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar el proceso en base de datos')

   }



}


module.exports = { dbConnection }