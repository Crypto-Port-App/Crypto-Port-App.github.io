const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('You can find more information on this API at https://github.com/Crypto-Port-App/Crypto-Port-App.github.io');
});

app.listen(port, () => {
    console.log(`Server is live on http://localhost:${port}`);
});