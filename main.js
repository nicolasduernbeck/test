const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'success',
  });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
