const mongoose = require('mongoose');
require('dotenv').config();

class dbConnection {
    constructor(){
        this.isConnected = false;
        this.dbURI = process.env.MONGODB_URI;
    }
    async connectToDb(){
        try{
            await mongoose.connect(this.dbURI);
            console.log('[Database] => Connected');
            this.isConnected = true;
        }catch(error){
            console.log(`[Database] => Connection Error: ${error}`);
            this.isConnected = false;
        }
    }

    async disconnectFrmDb(){
        if(this.isConnected === true){
            await mongoose.disconnect();
            console.log('[Database] => Disconnected');
            this.isConnected = false;
        }
    }
}

module.exports = new dbConnection();