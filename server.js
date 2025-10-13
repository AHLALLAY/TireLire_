const express = require('express');
const dbConnection = require('./Databases/Connection');
require('dotenv').config();


const app = express();
const port = process.env.PORT;



const startServer = async () => {
    try {
        // connexion au BDD
        await dbConnection.connectToDb();

        // lacement du serveur
        app.listen(port, () => {
            console.log(`[Server] => http://localhost:${port}/`);
        });
    } catch (error) {
        console.log(`[Server] => Server Error : ${error}`);
    }

}

app.get('/', (req, res)=> {
    res.send(`<div style=" display: flex; justify-content: center; align-items: center; height: 100vh;
  background: linear-gradient(135deg, #e0ffe0, #f0fff0); font-family: 'Segoe UI', sans-serif;">
  <h1 style="color: #2e7d32; font-size: 2.5rem;"> Server is running ... </h1>
</div>`);
})

startServer();