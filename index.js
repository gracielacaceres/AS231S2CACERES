const express = require('express');

const app = express();

app.get('/public', (req, res) => {
    res.render('public');
  });
  
app.listen(3000);
console.log('Server on port 3000')
