// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connedct to MongoDB
mongoose.connect('set up mongo server', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});



// define a mongoose model (replace with actual schema)
const Item = mongoose.model('Item', {
    column1: String,
    column2: String,
    column3: String,
});

// Set EJS as the view engine
app.get('/', async (req, res) => {
    try {
    // Fetch data from MongoDB (replace with actual query)
    const tableData = await Item.find();

    // Render the EJS template with the data
    res.render('table', {tableData});
    } catch (erro) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }  
}); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`);
});