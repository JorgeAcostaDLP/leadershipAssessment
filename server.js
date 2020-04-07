const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const answersRouter = require('./routes/answers');
const bodyParser = require('body-parser');
// serve the homepage from here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// handle api calls from here

app.use('/answers', answersRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
