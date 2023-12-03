const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./src/routes/auth');
const notesRoutes = require('./src/routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://shamsulca:shamsulca2023@cluster0.l7efxwe.mongodb.net/?retryWrites=true&w=majority");

app.use(
  cors({
    credentials: true,
    origin: "*",
    // origin: "http://localhost:3000",
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/notes', notesRoutes);


if(!module.parent){
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;