const express = require('express');
const dotenv = require('dotenv');
const moogoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

const config = require('./config/key');

const { User } = require('./models/User');

dotenv.config();

moogoose.connect(config.mongoURI , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:false,
})
.then(() => console.log('MongoDB Connected...!!'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! ~ 안녕하세요.!!')
});

app.post('/register', (req,res) => {
  const user = new User(req.body);

  user.save((err, userInfo) =>{
    if(err) return res.json({ success: false , err});

    return res.status(200).json({
      success:true,
    });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});