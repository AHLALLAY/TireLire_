const express = require('express');
const bcrypt = require('bcryptjs');
const dbConnection = require('./Databases/Connection');
const user = require('./Models/User')
const authRoute = require('./Routes/authRoutes');
const userRoute = require('./Routes/userRoutes');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

const InitAdmin = async () => {
    try {
        const adminConter = await user.countDocuments({ role: 'admin' });
        if (adminConter === 0) {

            const email = process.env.EMAIL;
            const password = process.env.PASSWORD;
            
            if (!email || !password) {
                throw new Error('Admin email or password not configured in environment variables');
            }
            const Hashedpassword = await bcrypt.hash(password, 10);

            await user.create({
                firstName: 'Abderrahmane',
                lastName: 'Ahlallay',
                email: email,
                password: Hashedpassword,
                phone: '0606000000',
                nationalId: 'IE12345',
                nationalIdImage: 'abderrahmane_ahlallay_cin.jpg',
                selfieImage: 'abderrahmane_ahlallay_selfie.jpg',
                role: 'admin',
                KYCStatus: 'approved',
            });

            console.log('[Server] Default Admin Created');
        } else {
            console.log('[Server] Admin user already exists');
        }
    } catch (error) {
        console.log(`[server] Internal server error : ${error}`);
    }
}

const startServer = async () => {
    try {
        // connexion au BDD
        await dbConnection.connectToDb();

        // Initialiser le role d'admin
        InitAdmin();

        // lacement du serveur
        app.listen(port, () => {
            console.log(`[Server] => http://localhost:${port}/`);
        });
    } catch (error) {
        console.log(`[Server] => Server Error : ${error}`);
    }

}

app.get('/', (req, res) => {
    res.send(`<div style=" display: flex; justify-content: center; align-items: center; height: 100vh;
  background: linear-gradient(135deg, #e0ffe0, #f0fff0); font-family: 'Segoe UI', sans-serif;">
  <h1 style="color: #2e7d32; font-size: 2.5rem;"> Server is running ... </h1>
</div>`);
})

startServer();