const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');
const pool = new Pool ({
    DATABASE_URL : process.env.DATABASE_URL
});

const PORT = process.env.PORT;
app.use(express.static('public'));

app.get('/people', async (req,res) =>{
    try {
    const results = await pool.query('SELECT * FROM people');
    res.status(200).send(results.rows);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log('I hear you baby')
});