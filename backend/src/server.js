const mongoose = require('mongoose');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const corsOptions = {
    origin: "http://localhost:4200"
    };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/////////////////////////////////////////////////////DB logic///////
const db = require('./model');
db.mongoose.connect(db.url,{useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                    console.log(`connection succesful`);
                })
            .catch((err)=>console.log(`no connection`));

/////////////////////////////////////////////////////
require('./router/app-route')(app);

app.get('/',(req,res)=>{
    res.send('hello world from the server');
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/myapp listening`);
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DB= 'mongodb+srv://san:TALUHwR8PdlAazUd@cluster0.abowi.mongodb.net/pizzadb?retryWrites=true&w=majority';
// mongoose.connect(DB).then(()=>{
//     console.log(`connection succesful`);
// }).catch((err)=>console.log(`no connection`));
// const Slot = require('./model/slotSchema');
// const middleware = (req,res,next)=>{
//     console.log(`hello my middleware`);
//     next();
// }

