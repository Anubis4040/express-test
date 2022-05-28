const express = require('express');
const app = express();

app.use(express.json())

app.get('/webhook', (req, res) => {
    console.log(req.body);
    res.send('Hello World! xddd')
})

app.listen(process.env.PORT || 4000)