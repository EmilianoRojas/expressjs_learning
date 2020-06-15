const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// Init middleware
// app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => res.render('index', {
  title: "Member App",
  members
}))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Member API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

