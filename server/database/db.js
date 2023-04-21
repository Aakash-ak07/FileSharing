import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONODB_URL = `mongodb://aakashmanihar7:aakash2023@ac-74nvwfo-shard-00-00.qe4z12c.mongodb.net:27017,ac-74nvwfo-shard-00-01.qe4z12c.mongodb.net:27017,ac-74nvwfo-shard-00-02.qe4z12c.mongodb.net:27017/?ssl=true&replicaSet=atlas-5bpc54-shard-0&authSource=admin&retryWrites=true&w=majority`; 
    try{
        await mongoose.connect(MONODB_URL, {useNewUrlParser : true});
        console.log("Database connected successfully")
    }
    catch(error){
        console.error('Error while connecting with database ', error.message ); 
    }
}

export default DBConnection; 