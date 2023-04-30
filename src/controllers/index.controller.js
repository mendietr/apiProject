import {pool} from '../../src/db.js';




export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}

// import mongoose from 'mongoose'

// mongoose.connect('mongodb+srv://mendietr1978:HHnOQn2B4iVtEdOU@cluster0.pgfsbij.mongodb.net/companydb?retryWrites=true&w=majority', { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,
//     socketTimeoutMS: 45000,
//     wtimeoutMS: 25000 // aumentar tiempo de espera para operaciones de escritura
//   });

//   const connection = mongoose.connection
//     console.log('DB is connected');


// app.use(indexRoutes)
// app.use(employeesRoutes)



// app.get('/ping', async (req, res) => {
//   const result = await collection.findOne({ name: "ping" });
//   res.json(result.value);
// });