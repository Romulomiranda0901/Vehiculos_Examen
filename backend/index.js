const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const vehiculoRoutes = require('./routes/vehiculoRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/vehiculos', vehiculoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});