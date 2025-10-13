const express = require('express');
require('dotenv').config();


const app = express();
const port = process.env.PORT;



const startServer = async () => {
    // connexion au BDD
    try {

    } catch (error) {
        
    }
    // 
    app.listen(port, () => {
        console.log(`[Server Starting] => http://localhost:${port}/`);
    });
}

app.get('/', (req, res)=> {
    res.send(`<h1 style="color:green">Server is running ...</h1>`);
})

startServer();