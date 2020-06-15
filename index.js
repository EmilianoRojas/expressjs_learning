const express = require('express');
const path = require('path');


const app = express();

// //Init middleware
// app.use(logger);

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Member API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

