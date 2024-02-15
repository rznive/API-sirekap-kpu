const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server API is running!');
});

app.get('/sirekap-kpu', async (req, res) => {
  try {
    const sirekapResponse = await axios.get('https://sirekap.riizeadev.tech/');
    res.json(sirekapResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
