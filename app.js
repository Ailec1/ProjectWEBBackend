const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');


const corsOptions = {
    origin: 'http://localhost:8081',
    credentials: true 
};

app.use(cors(corsOptions));
app.use(cookieParser());

const db = require('./app/models');

db.sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to bezkoder application.' });
});

require('./app/routes/users.routes')(app);
require('./app/routes/score.routes')(app);

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
}
);
